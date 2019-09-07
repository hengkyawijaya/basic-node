'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('Posts', [{
        message: 'Hello World',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkDelete('Posts', null, {});
    
  }
};
