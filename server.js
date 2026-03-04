const express = require("express");
const app = express();

app.get("/api/reports/sales", (req, res) => {
  const storeId = req.query.store_id;

  if (!storeId) {
    return res.json([
      { date: "2026-03-01", total_sales: 1200 },
      { date: "2026-03-02", total_sales: 1800 },
      { date: "2026-03-03", total_sales: 950 },
      { date: "2026-03-04", total_sales: 1000 }

    ]);
  }

  return res.json([
    { date: "2026-03-01", total_sales: 2000, store_id: storeId },
    { date: "2026-03-02", total_sales: 3500, store_id: storeId },
    { date: "2026-03-03", total_sales: 1700, store_id: storeId },
    { date: "2026-03-04", total_sales: 1700, store_id: storeId }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});