/* eslint-env node */
module.exports = {
  normalizeEntityName: function (entityName) {
    return entityName || "ember-more-menu";
  },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'css-element-queries', target: '^0.4.0' }
    ]);
  }
};
