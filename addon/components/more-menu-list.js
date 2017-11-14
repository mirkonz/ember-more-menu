import Ember from 'ember';
import layout from '../templates/components/more-menu-list';

export default Ember.Component.extend({
  classNames: ['more-menu--list'],
  tagName: 'ul',
  layout,
  itemClass: null
});
