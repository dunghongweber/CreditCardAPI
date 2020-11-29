const mongoose = require("mongoose"); //getting Mongoose
const Schema = mongoose.Schema; //getting Schema of Mongoose

//creating schema
/*Card Schema: act as model to create a card record in database */
const cardSchema = new Schema(
  {
    //picture url of a card
    picture: {
      type: String,
      required: true,
    },
    //benefits of a card
    benefit: {
      type: String,
      required: true,
    },
    //card issuer
    issuer: {
      type: String,
      required: true,
    },
    //name of a card
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //for keeping track of created/updated time
);
//creating Card model
//the names (const name and parameter name) must be the same collection name without plural <s>
const Card = mongoose.model("Card", cardSchema);
module.exports = Card; //export module to use Card in express
