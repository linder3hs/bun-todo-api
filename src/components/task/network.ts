import { Hono } from "hono";
import * as Controller from "./controller";

const router = new Hono();

router.get("/", Controller.list);

export default router;
