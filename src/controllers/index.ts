import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json" with { type: "json" };
import * as env from "../environment/env.js"

env.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

env.app.get("/", (req, res) => {
  res.send("API radi!");
});

env.app.listen(env.port, () => {
  console.log(`Swagger UI: http://localhost:${env.port}/api-docs`);
});
