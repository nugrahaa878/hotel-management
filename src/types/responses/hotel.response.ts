import { Hotel } from "../hotel";

export interface HotelReponse {
  success: boolean;
  data?: Hotel;
  message?: string;
}
