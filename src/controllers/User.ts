import { Request, Response } from "express";
import { QueryUserById, QueryListOfUsers } from "../services/User";

const GetAllUsers = (req: Request, res: Response): void => {
  const userList = QueryListOfUsers();

  res.json({
    status: "success",
    data: userList,
  });
};

const GetUser = (req: Request, res: Response): void => {
  const userId = parseInt(req.params.id);
  const userData = QueryUserById(userId);

  if (!userData) {
    res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.json({
    status: "success",
    data: userData,
  });
};

export { GetAllUsers, GetUser };
