import { Context } from "hono";
import { responseSuccess, responseError } from "../../network";

export const list = async (c: Context) => {
  try {
    const tasks = [];

    responseSuccess({ res: c, data: tasks });
  } catch (error) {
    responseError({ res: c, data: error });
  }
};
