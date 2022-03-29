const { Books } = require('./models');

Books.create({
    name: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    price: 54400,
    is_publish: false,
}).then(res => console.log(res));

// node saya error ngejalanin create.js