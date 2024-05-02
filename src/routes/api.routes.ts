import { Router } from "express";
import express, { Request, Response } from 'express';
import chefRouter from "./chef.routes";

const apiRouter = Router();

apiRouter.use("/chefs", chefRouter);

export default apiRouter;

