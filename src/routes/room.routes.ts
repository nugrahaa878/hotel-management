import roomController from "@/controllers/room.controller";
import { Router } from "express";

const routerRooms = Router();

routerRooms.post("/", async (req, res) => {
  roomController.createRoom(req, res);
});

export default routerRooms;
