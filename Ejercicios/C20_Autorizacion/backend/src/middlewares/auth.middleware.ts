import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { Rol } from "../generated/prisma/client";
import { JWT_SECRET } from "../config/env";

type JwtPayload = {
  id: number;
  rol: Rol;
};

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "No autenticado",
    });
  }

  const token = authorization.slice(7);

  try {
    const payload = jwt.verify(
      token,
      JWT_SECRET
    ) as JwtPayload;

    req.usuario = {
      id: payload.id,
      rol: payload.rol,
    };

    next();
  } catch {
    return res.status(401).json({
      error: "Token inválido o expirado",
    });
  }
}

export function authorize(...roles: Rol[]) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.usuario) {
      return res.status(401).json({
        error: "No autenticado",
      });
    }

    if (!roles.includes(req.usuario.rol)) {
      return res.status(403).json({
        error: "No autorizado",
      });
    }

    next();
  };
}