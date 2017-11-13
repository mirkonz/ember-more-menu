import Ember from 'ember';
import layout from '../templates/components/more-menu';
import CssElementQueries from 'npm:css-element-queries';

const { Component, inject, computed, run: { schedule } } = Ember;
const ResizeSensor = CssElementQueries.ResizeSensor;

export default Component.extend({
  resize: Ember.inject.service(),
  classNames: ['more-menu'],
  layout,

  // public
  itemClass: 'btn',
  moreMenuItemClass: 'btn',
  moreButtonText: 'More',
  moreButtonClass: 'btn btn-outline-secondary',
  moreButtonPosition: 'right', // left or right
  closeMoreMenuOnItemClick: true,
  targetAttachmentPosition: 'bottom right',
  attachmentPosition: 'top right',

  // private
  _showMoreMenu: false,

  moreButtonId: computed('elementId', function() {
    return `more-${this.get('elementId')}`;
  }),

  exceptSelector: computed('moreButtonId', function() {
    const moreButtonId = this.get('moreButtonId');
    const closeMoreMenuOnClick = this.get('closeMoreMenuOnClick');
    let exceptSelector = [`#${moreButtonId}`];
    if (!closeMoreMenuOnClick) {
      exceptSelector.push(`#${moreButtonId}-menu`);
    }
    return exceptSelector.join(",");
  }),

  didInsertElement() {

    // Set up window resize handler
    this.get('resize').on('didResize', event => {
      this.calculateItems();
    });

    // Set up component resize handler
    new ResizeSensor(this.$(), () => {
      this.calculateItems();
    });

    // Set up event listener to
    this.$().on('hideMoreMenu', () => {
      this.set('_showMoreMenu', false);
    });
    this.$().on('showMoreMenu', () => {
      this.set('_showMoreMenu', true);
    });

    // Initial set up
    schedule('afterRender', this, this.calculateItems);
  },

  didDestroyElement() {
    this.$().off('hideMoreMenu');
  },

  calculateItems() {
    const containerElement = this.$('.more-menu--container');
    const itemsContainerElement = this.$('.more-menu--items');
    const moreButtonElement = this.$('.more-menu--more-btn');
    const moreButtonId = this.get('moreButtonId');
    const moreContainerElement = $(`#${moreButtonId}-menu`);

    let itemElements = itemsContainerElement.find('li');
    let moreItemElements = moreContainerElement.find('li');

    $(itemElements).show();
    $(moreItemElements).hide();

    const containerWidth = containerElement.width();
    const itemsContainerWidth = itemsContainerElement.width();
    const moreContainerWidth = moreButtonElement.width();

    if (containerWidth < itemsContainerElement.width()) {

      if (this.get('moreButtonPosition') === 'right') {
        itemElements = itemElements.get().reverse();
        moreItemElements = moreItemElements.get().reverse();
      }

      $(itemElements).each((i, itemElement) => {
        $(itemElement).hide();
        $(moreItemElements[i]).show();
        if (containerWidth - moreContainerWidth >= itemsContainerElement.width()) {
          return false;
        }
      });
    }

    const hasHiddenItems = $(itemElements).filter(':hidden').length;
    if (hasHiddenItems) {
      moreButtonElement.show();
    } else {
      moreButtonElement.hide();
    }
  },

  actions: {
    closeMoreMenu() {
      this.set('_showMoreMenu', false);
    },
    toggleMoreMenu() {
      const _showMoreMenu = this.get('_showMoreMenu');
      if (_showMoreMenu) {
        this.set('_showMoreMenu', false);
      } else {
        this.set('_showMoreMenu', true);
        schedule('afterRender', this, this.calculateItems);
      }
    },
    recalculateItems() {
      schedule('afterRender', this, this.calculateItems);
    }
  }

});
