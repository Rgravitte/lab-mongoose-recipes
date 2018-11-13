const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const recipeSchema = new Schema()({
  title : {type: String, required: true, unique: true},
  level : {type: String, enum: ["easy Peasy", "amateur chef", "utrapro chef"]},
  ingredients : {enum: []},
  cuisine : {type: String, required: true},
  dishType : {type: String, enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]},
  image : {type: String, default: URL("https://images.media-allrecipes.com/images/75131.jpg")},
  duration : {type: Number, min: 0},
  creator : String,
  created : {type: Date, default: new Date()}
})

const Recipes = mongoose.model('Recipes', recipeSchema);

module.exports(Recipes);

