const { Books } = require('./models');


Books.destroy({
  where: {
    name: 'The Intelligent Investor',
  },
})