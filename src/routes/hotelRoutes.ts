import { Router } from "express";
import hotelController from "../controllers/hotelController";

const routerHotels = Router();

routerHotels.post("/", async (req, res) => {
  hotelController.createHotel(req, res);
});

export default routerHotels;
