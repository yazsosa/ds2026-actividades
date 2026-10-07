import { describe, expect, it } from "vitest";
import { registroSchema } from "./auth.validation";

describe("registroSchema", () => {
  it("acepta un registro válido", () => {
    const resultado = registroSchema.safeParse({
      nombre: "Ana",
      email: "ana@correo.com",
      password: "Password1",
    });

    expect(resultado.success).toBe(true);
  });

  it("rechaza una contraseña sin mayúscula", () => {
    const resultado = registroSchema.safeParse({
      nombre: "Ana",
      email: "ana@correo.com",
      password: "password1",
    });

    expect(resultado.success).toBe(false);
  });
});