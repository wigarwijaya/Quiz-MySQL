const express = require("express");
const app = express();

// app.use(express.json());

const { Books } = require("./models");

// app.get("/", (_, res) => {
//     Books.findAll().then((books) => res.send(books));
// });

app.get("/", (_, res) => {
    Books.findOne({
        where: {
          author: 'Simon Sinek',
        },
      }).then((books) => res.send(books));
});


app.listen(3000);