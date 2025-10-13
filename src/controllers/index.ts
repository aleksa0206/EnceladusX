import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json" with { type: "json" };

const app = express();
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("API radi!");
});

app.listen(port, () => {
  console.log(`Swagger UI: http://localhost:${port}/api-docs`);
});
