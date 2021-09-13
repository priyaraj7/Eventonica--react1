// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "This is my events route." });
// });

// module.exports = router;

var express = require("express");
const { body, validationResult } = require("express-validator");
const uuid = require("uuid");

var router = express.Router();

let events = [
  {
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
    id: uuid.v4(),
  },
  {
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
    id: uuid.v4(),
  },
  {
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
    id: uuid.v4(),
  },
];

/* GET events listing. */
router.get("/", function (req, res, next) {
  res.send(events);
});

router.post(
  "/",
  body("name").notEmpty(),
  body("date").notEmpty(),
  body("description").notEmpty(),
  body("category").notEmpty(),
  function (req, res, next) {
    // save request data to a variable in routes/users.js
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const event = {
      id: uuid.v4(),
      name: req.body.name,
      date: req.body.date,
      description: req.body.description,
      date: req.body.category,
    };
    events.push(event);
    res.send(event);
  }
);
router.post("/:eventId/delete", (req, res, next) => {
  // : acts as a placeholder
  const eventId = req.params.eventId;
  const event = events.find((u) => u.id === eventId);

  if (!event) {
    return res.status(404).json({ error: `event ${eventId} not found ` });
  }
  events.splice(events.indexOf(event), 1);
  return res.send({ status: "success" });
});
module.exports = router;
