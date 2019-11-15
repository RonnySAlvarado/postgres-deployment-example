const db = require("../data/dbConfig");

const getAll = () => {
  return db("users");
};

const addUser = user => {
  return db("users").insert(user);
};

module.exports = { getAll, addUser };
