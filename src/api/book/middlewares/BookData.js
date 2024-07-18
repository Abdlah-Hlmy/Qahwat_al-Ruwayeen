'use strict';

/**
 * `BookData` middleware
 */

const populate = {
  bookCover: {
    populate: true,
    fields: ["url", "name"]
  },
  Link: {
    populate: true,
    fields: ["url", "name"]
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In BookData middleware.');
    ctx.query = {
      populate,
      ...ctx.query
    }
    await next();
  };
};
