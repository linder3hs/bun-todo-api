import { Context } from "hono";

export interface ResponseJSON {
  res: Context;
  ok?: boolean;
  status?: any;
  data?: any;
}
