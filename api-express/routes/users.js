var express = require("express");
const { body, validationResult } = require("express-validator");
const uuid = require("uuid");

var router = express.Router();

let users = [
  { name: "Marlin", email: "marlin@gmail.com", id: uuid.v4() },
  { name: "Nemo", email: "nemo@gmail.com", id: uuid.v4() },
  { name: "Dory", email: "dory@gmail.com", id: uuid.v4() },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

router.post(
  "/",
  body("name").notEmpty(),
  body("email").isEmail(),
  function (req, res, next) {
    // save request data to a variable in routes/users.js
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = { id: uuid.v4(), name: req.body.name, email: req.body.email };
    users.push(user);
    res.send(user);
  }
);
router.post("/:userId/delete", (req, res, next) => {
  // : acts as a placeholder
  const userId = req.params.userId;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: `user ${userId} not found ` });
  }
  users.splice(users.indexOf(user), 1);
  return res.send({ status: "success" });
});
module.exports = router;
