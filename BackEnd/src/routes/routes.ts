import express from "express";
import LinkController from "../controllers/linkController";
import LinkControllerGet from "../controllers/linkModelGet";

export const routes = express.Router();

routes.post('/link', LinkController.Shorturl);
routes.get('/link', LinkControllerGet.ShorturlGet);
