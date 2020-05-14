const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/:id/changePassword";
const ME = "/me";

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/addComment";
const DELETE_COMMENT = "/:id/deleteComment";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if(id) return `/users/${id}`;
    else return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,
  upload: UPLOAD,
  videos: VIDEOS,
  videoDetail: id => {
    if(id) return `/videos/${id}`;
    else return VIDEO_DETAIL;
  },
  editVideo: id => {
    if(id) return `/videos/${id}/edit`;
    else return EDIT_VIDEO;
  },
  deleteVideo: id => {
    if(id) return `/videos/${id}/delete`;
    else return DELETE_VIDEO;
  } ,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  fb: FB,
  facebookCallback: FB_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  deleteComment: DELETE_COMMENT
};

export default routes;