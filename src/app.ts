import { Hono } from "hono";
import { taskRouter } from "./components";
import "reflect-metadata";

export const app = new Hono();

app.route("/task", taskRouter);
