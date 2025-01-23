export interface Room {
  id?: number;
  hotel_id: number;
  type: string;
  unit_number: string;
  floor_number: number;
  created_at?: Date;
  updated_at?: Date;
}
