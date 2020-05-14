import express from "express";
import passport from "passport";
import routes from "../routes";
import { 
  logout, 
  getMe, 
  getJoin, 
  postJoin, 
  getLogin, 
  postLogin, 
  githubLogin, 
  postGithubLogIn,
  facebookLogin,
  postFacebookLogin
} from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.github, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.fb, facebookLogin);

globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;