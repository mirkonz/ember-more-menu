import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('more-menu-items', 'Integration | Component | more menu items', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{more-menu-items}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#more-menu-items}}
      template block text
    {{/more-menu-items}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
