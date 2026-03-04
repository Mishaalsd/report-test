const express = require("express");
const cors = require("cors");
const app = express();

// تفعيل CORS لجميع الطلبات
app.use(cors());

// Endpoint لجلب تقارير المبيعات
app.get("/api/reports/sales", (req, res) => {
  const storeId = req.query.store_id;

  // لو ما في store_id، نرجع بيانات وهمية
  if (!storeId) {
    return res.json([
      { date: "2026-03-01", total_sales: 1200 },
      { date: "2026-03-02", total_sales: 1800 },
      { date: "2026-03-03", total_sales: 950 },
      { date: "2026-03-04", total_sales: 1000 }
    ]);
  }

  // لو في store_id، نرجع بيانات مرتبطة بالمتجر
  return res.json([
    { date: "2026-03-01", total_sales: 2000, store_id: storeId },
    { date: "2026-03-02", total_sales: 3500, store_id: storeId },
    { date: "2026-03-03", total_sales: 1700, store_id: storeId },
    { date: "2026-03-04", total_sales: 1700, store_id: storeId }
  ]);
});

// تحديد البورت، سواء من البيئة أو 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});