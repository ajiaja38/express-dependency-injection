import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { logger } from "./utils/log/logger";
import { IResponseMessage } from "./utils/types/interface/IResponse.interface";
import { router } from "./router";

const main = async () => {
  const port: number = 3000;
  const app: Express = express();

  app.use(morgan("common"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req: Request, res: Response) => {
    const response: IResponseMessage = {
      code: 200,
      status: true,
      message: "Hello From Express",
    };

    res.status(200).send(response);
  });

  app.use(router);

  app.listen(port, () => {
    logger.info(`Server running on http://localhost:${port}`);
  });
};

main();
