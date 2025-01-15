import express from "express";
import { GetAllUsers, GetUser } from "../controllers/User.js";

const routerUser = express.Router();

routerUser.get("/all", GetAllUsers);
routerUser.get("/byId/:id", GetUser);

export { routerUser };
