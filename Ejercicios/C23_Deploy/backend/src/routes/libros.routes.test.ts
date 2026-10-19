import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../app";

describe("POST /api/libros", () => {
  it("devuelve 401 si intenta crear un libro sin token", async () => {
    const response = await request(app)
      .post("/api/libros")
      .send({
        titulo: "Libro de prueba",
      });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: "No autenticado",
    });
  });
});