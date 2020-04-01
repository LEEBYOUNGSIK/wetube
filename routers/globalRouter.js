import express from "express";
import routes from "../routes";
import { login, logout, getJoin, postJoin, getLogin, postLogin } from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.login, postLogin);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;