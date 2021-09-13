var express = require("express");
const db = require("../db-connection");
const { body, validationResult } = require("express-validator");
const uuid = require("uuid");

var router = express.Router();

let users = [
  { name: "Marlin", email: "marlin@gmail.com", id: uuid.v4() },
  { name: "Nemo", email: "nemo@gmail.com", id: uuid.v4() },
  { name: "Dory", email: "dory@gmail.com", id: uuid.v4() },
];

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await db.any("SELECT * FROM users", [true]);
    res.send(users);
  } catch (e) {
    console.error("error when running db query", e);
    res.status(500).statusMessage("DB threw error");
  }
});

router.post(
  "/",
  body("name").notEmpty(),
  body("email").isEmail(),
  async function (req, res, next) {
    // save request data to a variable in routes/users.js
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = { name: req.body.name, email: req.body.email };
    try {
      const createdUser = await db.one(
        "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
        [user.name, user.email]
      );
      console.log(createdUser);
      res.send(createdUser);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }
);
router.post("/:userId/delete", async (req, res, next) => {
  // : acts as a placeholder
  const userId = req.params.userId;
  try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    return res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});
module.exports = router;
