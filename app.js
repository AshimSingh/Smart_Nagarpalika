import express from "express";
import { router } from "./src/routes/routes.js";

const app = express();
app.use(express.json())
// app.use("/api", (req, res) => {
//   res.status(200).send("Hello mate");
// });

app.use("/api", router);

export default app;
