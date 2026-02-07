import express from "express";
import { AliveRouter } from "./domain/routes/alive";

const app = express();

app.use(express.json());

const aliveRouter = AliveRouter.getInstance();

app.use("/alive", aliveRouter.getRoutes());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});