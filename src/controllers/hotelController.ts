import { Request, Response } from "express";
import hotelService from "../services/hotelService";
import { Hotel } from "../types/hotel";
import { CreateHotelRequest } from "../types/requests/hotel.request";
import { HotelReponse } from "@/types/responses/hotel.response";

class HotelController {
  // Use arrow function to automatically bind 'this'
  createHotel = async (
    req: Request<{}, {}, CreateHotelRequest>,
    res: Response<HotelReponse>
  ) => {
    try {
      const { name, location, rating } = req.body;

      if (!name || !location || !rating) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      if (rating < 1 || rating > 5) {
        return res.status(400).json({
          success: false,
          message: "Rating must be between 1 and 5",
        });
      }

      const hotelData: Omit<Hotel, "id" | "created_at" | "updated_at"> = {
        name,
        location,
        rating,
      };

      const newHotel = await hotelService.createHotel(hotelData);

      res.status(201).json({
        success: true,
        data: newHotel,
      });
    } catch (error) {
      console.error("Controller error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
}

export default new HotelController();
