const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.getAll()
    .then(allUsers => {
      res.status(200).json(allUsers);
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/", (req, res) => {
  Users.addUser(req.body)
    .then(addedUser => {
      res.status(201).json(addedUser);
    })
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
