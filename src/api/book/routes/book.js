'use strict';

/**
 * book router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::book.book', {
  config: {
    find: {
      middlewares: ['api::book.book-data'],
    },
    findOne: {
      middlewares: ['api::book.book-data'],
    }
  }
});
