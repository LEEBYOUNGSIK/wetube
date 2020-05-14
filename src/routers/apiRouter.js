import express from "express";
import routes from "../routes";
import { 
  postRegisterView,
  postAddComment,
  postDeleteComment 
} from "../controllers/videoControllers";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);

apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.deleteComment, postDeleteComment);

export default apiRouter;