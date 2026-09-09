const API_URL = import.meta.env.VITE_API_URL;

export function guardarToken(token: string) {
  localStorage.setItem("token", token);
}

export function obtenerToken() {
  return localStorage.getItem("token");
}

export function borrarToken() {
  localStorage.removeItem("token");
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = obtenerToken();

  const headers = new Headers(options.headers);

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type");
  const esJson = contentType?.includes("application/json");

  const data = esJson ? await response.json() : null;

  if (!response.ok) {
    const mensaje =
      data?.error ?? `Error ${response.status}: ${response.statusText}`;

    throw new Error(mensaje);
  }

  return data as T;
}