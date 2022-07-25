import { ResponseJSON } from "../interface/response";

export const responseSuccess = (values: ResponseJSON) => {
  const { res, ok = true, status = 200, data } = values;

  res.status(status);

  res.json({
    ok,
    data,
  });
};

export const responseError = (values: ResponseJSON) => {
  const { res, ok = false, status = 500, data } = values;

  res.status(status);

  res.json({
    ok,
    data,
  });
};
