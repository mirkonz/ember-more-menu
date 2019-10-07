import Component from '@ember/component';
import layout from '../templates/components/more-menu-list';

export default Component.extend({
  classNames: ['more-menu--list'],
  tagName: 'ul',
  layout,
  itemClass: null
});
