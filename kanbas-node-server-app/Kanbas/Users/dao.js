import model from "./model.js";
export const findAllUsers = () => model.find();
export const createUser = (user) => {};
export const findUserByUsername = (username) => model.findOne({ username: username });
export const findUserById = (userId) => model.findById(userId);
export const findUserByCredentials = (username, password) => model.findOne({ username, password });
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });



