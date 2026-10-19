import { describe, expect, it, vi } from "vitest";
import type { NextFunction, Request, Response } from "express";
import { authorize } from "./auth.middleware";

describe("authorize", () => {
  it("llama a next cuando el usuario tiene el rol permitido", () => {
    const req = {
      usuario: {
        id: 1,
        rol: "ADMIN",
      },
    } as Request;

    const res = {} as Response;
    const next = vi.fn() as NextFunction;

    const middleware = authorize("ADMIN");

    middleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();
  });
});