import { Router } from "express";
import hotelController from "../controllers/hotel.controller";

const routerHotels = Router();

routerHotels.post("/", async (req, res) => {
  hotelController.createHotel(req, res);
});

export default routerHotels;
