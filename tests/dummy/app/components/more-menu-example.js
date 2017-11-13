import Ember from 'ember';

const { Component, ArrayProxy, run: { schedule } } = Ember;

export default Component.extend({
  items: ArrayProxy.create({
    content: Ember.A([
      {
        text: "Action 1",
        linkTo: "index"
      }, {
        text: "Action 2",
        linkTo: "index"
      }, {
        text: "Action 3",
        linkTo: "index"
      }, {
        text: "Action 4"
      }, {
        text: "Action 5"
      }, {
        text: "Action 6",
        href: "#"
      }, {
        text: "Action 7",
        href: "#"
      }, {
        text: "Action 8",
        href: "#"
      }, {
        text: "Action 9",
        href: "#"
      }])
    }),
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
