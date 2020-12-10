//getting Card model for db access
const Card = require("../models/card");

//all cards
const card_index = (req, res) => {
  Card.find()
    .sort({ createdAt: -1 })
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

  //check if the card name is already existed
  Card.exists({ name: card.name.toUpperCase() }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
      //prevent duplicate card name
      if (docs === true) {
        res.json({
          addCardResult:
            "Card already existed, give a different name if you want to add this card",
        });
      }
      //add new card if card name is different
      else {
        card
          .save()
          .then((result) => {
            res.json({ addCardResult: "YES" });
          }) //send json result of newly created card
          .catch((err) => console.log(err)); //log out error
      }
    }
  });
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

//update or edit a card
const card_update = (req, res) => {
  const id = req.params.id; //getting id from url

  Card.findByIdAndUpdate(id, req.body, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated Card: ", result);
    }
  })
    .then((result) => {
      res.json({ updateSucess: "yes" }); //return json as response
    })
    .catch((err) => {
      console.log(err); //log out error
      res.json({ updateSucess: "no" }); //return json as response
    });
};

//export all methods of Card Controller
module.exports = {
  card_index,
  card_details,
  card_add_post,
  card_delete,
  card_update,
};
