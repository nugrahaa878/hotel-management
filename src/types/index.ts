export interface ApiResponse<T> {
  status: "success" | "error";
  data?: T;
  message?: string;
}

export interface ErrorRespose {
  status: "error";
  message: string;
  stack?: string;
}
