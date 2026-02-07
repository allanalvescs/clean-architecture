import express from "express";
import { AliveRouter } from "./infra/routes/alive";
import { UsersRouter } from "./infra/routes/users";

const app = express();

app.use(express.json());

const aliveRouter = AliveRouter.getInstance();
const usersRouter = UsersRouter.getInstance();

app.use("/alive", aliveRouter.getRoutes());
app.use("/api/v1/users", usersRouter.getRoutes());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});