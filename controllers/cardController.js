//getting Card model for db access
const Card = require("../models/card");

//all cards
const card_index = (req, res) => {
  Card.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

//card details
const card_details = (req, res) => {
  const id = req.params.id; //getting id from url
  console.log(id); //check if correct id

  Card.findById(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
      res.status(404);
    });
};

//add card
const card_add_post = (req, res) => {
  console.log(req.body); //log to check if HTML body has correct data

  const card = new Card(req.body); //create new card using HTML body data
  card
    .save()
    .then((result) => {
      res.json({ cardAdded: "yes" });
    }) //send json result of newly created card
    .catch((err) => console.log(err)); //log out error
};

//delete card
const card_delete = (req, res) => {
  const id = req.params.id; //getting id from url

  Card.findByIdAndDelete(id)
    .then((result) => {
      res.json({ deleteSucess: "yes" }); //return json as response
    })
    .catch((err) => {
      console.log(err); //log out error
      res.json({ deleteSucess: "no" }); //return json as response
    });
};

//export all methods of Card Controller
module.exports = {
  card_index,
  card_details,
  card_add_post,
  card_delete,
};
