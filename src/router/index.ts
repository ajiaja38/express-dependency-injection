import express from "express";
import { userRouter } from "./userRouter";
import { noteRouter } from "./noteRoutes";

export const router: express.Router = express.Router();

userRouter(router);
noteRouter(router);
