import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('more-menu', 'Integration | Component | more menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{more-menu}}`);

  assert.equal(this.$().text().trim(), 'More');

  // Template block usage:
  this.render(hbs`
    {{#more-menu}}
      template block text
    {{/more-menu}}
  `);

  let text = this.$().text().trim();
  text = text.replace(/(\r\n|\n|\r)/gm, '');
  text = text.replace(/\s{2,}/g,' ');
  assert.equal(text, 'template block text More');
});
