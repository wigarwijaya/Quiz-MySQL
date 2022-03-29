'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Books', [{
      name: 'The Intelligent Investor',
      author: 'Benjamin Graham',
      price: 175500,
      is_publish: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Segala Galanya Ambyar',
      author: 'Mark Manson',
      price: 111000,
      is_publish: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Books', null, {});
  }
};
