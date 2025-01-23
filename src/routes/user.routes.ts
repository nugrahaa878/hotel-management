import express from "express";
import { GetAllUsers, GetUser } from "../controllers/user.controller";

const routerUser = express.Router();

routerUser.get("/all", GetAllUsers);
routerUser.get("/byId/:id", GetUser);

export { routerUser };
