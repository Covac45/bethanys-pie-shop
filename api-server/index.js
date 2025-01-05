const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API serverr.
*/

/*
const users = {
  "jim@joesrobotshop.com": {
    firstName: "Jim",
    lastName: "Cooper",
    email: "jim@joesrobotshop.com",
    password: "very-secret",
  },
  "joe@joesrobotshop.com": {
    firstName: "Joe",
    lastName: "Eames",
    email: "joe@joesrobotshop.com",
    password: "super-secret",
  },
};
*/

let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/products", (req, res) => {
  let products = [
    {
      id: 1,
      name: "Apple Pie",
      tagline: "Our famous, number-one selling pie",
      AbpTagline: "Increase Your Apple Pie Intake",
      CardTagline: "Our famous apple pie!",
      description: "Indulge in the timeless delight of our Classic Apple Pie, a perfect balance of sweet and tart flavors encased in a golden, flaky crust. Each slice is brimming with tender, hand-picked apples coated in a luscious cinnamon-spiced filling, creating a warm and comforting taste in every bite. The buttery pastry, expertly baked to a crisp perfection, melts in your mouth while providing just the right amount of crunch. Perfect as a treat on its own or paired with a dollop of whipped cream or a scoop of vanilla ice cream, this pie is a celebration of tradition and exceptional flavor.",
      ingredients: ["Apple", "Sugar", "Eggs", "Milk"],
      IngredientsRisk: ["Yes", "Yes", "Yes", "Mabye"],
      IngredientsQty: ["50%", "1%", "10%", "<0.1%"],
      imageName: "/products/applepie.png",
      smallImageName:"/products/applepiesmall.png",
      category: "Fruit pie",
      price: 14.95,
      discount: 0.2,
    },
    {
      id: 2,
      name: "Blueberry cheesecake",
      tagline: "Smooth, sweet, and bursting with flavour",
      AbpTagline: "A piece of blueberry bliss",
      CardTagline: "You'll love it!",
      description: "Delight in the creamy, decadent flavors of our Blueberry Cheesecake, a perfect blend of rich, velvety cream cheese and the sweet-tart brightness of fresh blueberries. The smooth filling is complemented by a luscious layer of blueberry compote, creating a delightful contrast of textures and flavors. Resting on a buttery, golden graham cracker crust, this cheesecake offers an unforgettable taste of indulgence. Whether served as a centerpiece for a special occasion or as a simple treat, it’s a dessert that never fails to impress.",
      ingredients: ["Blueberry", "Cream cheese", "Sugar", "Eggs", "Milk"],
      IngredientsRisk: ["Yes", "Yes", "Yes", "Yes", "Mabye"],
      IngredientsQty: ["30%", "30%", "1%", "10%", "<0.1%"],
      imageName: "/assets/images/products/applepie.png",
      smallImageName:"/assets/images/products/applepiesmall.png",
      category: "Fruit pie",
      price: 14.95,
      discount: 0.2,
    },
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/

/*
app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});
*/

app.listen(8081, () => console.log("API Server listening on port 8081!"));
