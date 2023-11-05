const express = require("express");
const app = express();
const supabase = require("./supabaseClient");
const cors = require("cors");

const port = 3000;

app.use(express.static("public")); // to serve images, CSS files, and JavaScript files in a directory named public
// http://localhost:3000/images/cat.png

app.use(cors());

// routes
const items = require("./routes/get/items");
const listItems = require("./routes/get/listItems");
const usersItems = require("./routes/get/userItems"); // Won't let me use /usersItems

const insertItems = require("./routes/post/insertItems");
const updateItems = require("./routes/post/updateItems");

const deleteItems = require("./routes/delete/deleteItems");
//

app.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

app.get("/cat", (req, res) => {
  res.redirect("/images/cat.png");
});

// Each route can have one or more handler functions, which are executed when the route is matched.
// app.METHOD(PATH, HANDLER)

// SELECT: JWT Token Optional
app.get("/items", items); // return Item[]
//app.get("/users/:id/items/:jwt", usersItems); // return Item[] with userId/jwt param
//app.get("/list/items/:id", listItems); // return Item with itemId param

// requires auth: INSERT, UPDATE, DELETE with JWT Token & ItemId
app.post("/items", insertItems);
//app.post("/items/:id/:jwt", updateItems);
//app.delete("/items/:id/:jwt", deleteItems);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});