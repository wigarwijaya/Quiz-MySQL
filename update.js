const { Books } = require('./models');


Books.update({
  price: 105000,
}, {
  where: {
    id: 2,
  },
});
