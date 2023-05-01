const mongoose = require('mongoose');
const pagination = require("mongoose-paginate-v2");

const Article = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: false },
        published: { type: Boolean, required: false, default: false },
    },
    { timestamps: true }
);

//Replaces the _id by id in the final response
Article.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

//add pagination to schema
Article.plugin(pagination);

module.exports = mongoose.model('Article', Article);