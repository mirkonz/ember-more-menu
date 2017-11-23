import Ember from 'ember';

const { $, Component, run: { schedule } } = Ember;

export default Component.extend({
  items: [{
    text: "Item 1",
    linkTo: "index"
  }, {
    text: "Item 2",
    linkTo: "index"
  }, {
    text: "Item 3",
    linkTo: "index"
  }, {
    text: "Item 4",
    href: "#"
  }, {
    text: "Item 5",
    href: "#"
  }, {
    text: "Item 6",
    href: "#"
  }, {
    text: "Item 7",
    href: "#"
  }, {
    text: "Item 8"
  }, {
    text: "Item 9"
  }],
  didInsertElement() {
    schedule('afterRender', function() {
      $('.example1').animate({'width': '50%'}, 3000);
      $('.resizeable').resizable({
        handles: "e",
        start: (event, ui) => {
          $(ui.element).trigger('hideMoreMenu');
        }
      });
    });
  }
});
