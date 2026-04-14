const calcularPrecioFinal = (monto, medioPago) => {

  if (monto < 200) return monto;

  if (monto >= 200 && monto <= 400) {
    if (medioPago === "E") return monto * 0.7;
    if (medioPago === "D") return monto * 0.8;
    if (medioPago === "C") return monto * 0.9;
  }

  if (monto > 400) return monto * 0.6;
};

console.log(`Monto: $800 | Pago: E | Final: $${calcularPrecioFinal(800, "E")}`);
console.log(`Monto: $2900 | Pago: E | Final: $${calcularPrecioFinal(2900, "E")}`);
console.log(`Monto: $1300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);
console.log(`Monto: $300 | Pago: C | Final: $${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: $5000 | Pago: E | Final: $${calcularPrecioFinal(5000, "E")}`);
console.log(`Monto: $25000 | Pago: C | Final: $${calcularPrecioFinal(25000, "C")}`);
console.log(`Monto: $420000 | Pago: D | Final: $${calcularPrecioFinal(420000, "D")}`);