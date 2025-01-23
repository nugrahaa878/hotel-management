import { User, USER_DATA } from "../models/user.model";

const QueryUserById = (id: number): User | null => {
  const user = USER_DATA.find((userData) => userData.id === id);
  return user || null;
};

const QueryListOfUsers = (): User[] => {
  return USER_DATA;
};

export { QueryListOfUsers, QueryUserById };
