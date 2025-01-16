import { QueryUserById, QueryListOfUsers } from "../services/User.js";

const GetAllUsers = (req, res) => {
  const userList = QueryListOfUsers();

  return res.json({
    status: "success",
    data: userList,
  });
};

const GetUser = (req, res) => {
  const userId = req.params.id;
  const userData = QueryUserById(userId);

  return res.json({
    status: "success",
    data: userData,
  });
};

export { GetAllUsers, GetUser };
