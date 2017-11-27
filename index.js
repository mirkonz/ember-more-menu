/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-more-menu',
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/src/ResizeSensor.js');
    this.import('vendor/shims/resize-sensor.js');
  },
  treeForVendor(vendorTree) {
    var cssElementQueriesTree = new Funnel(path.dirname(require.resolve('css-element-queries')), {
      files: ['src/ResizeSensor.js'],
    });

    return new MergeTrees([vendorTree, cssElementQueriesTree]);
  }
};
