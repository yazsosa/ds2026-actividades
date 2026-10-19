import type { Rol } from "../generated/prisma/client";

declare global {
  namespace Express {
    interface Request {
      usuario?: {
        id: number;
        rol: Rol;
      };
    }
  }
}

export {};