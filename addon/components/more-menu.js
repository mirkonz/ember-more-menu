import Ember from 'ember';
import layout from '../templates/components/more-menu';
import ResizeElementMixin from 'ember-element-resize/mixins/resize';
import $ from 'jquery';

const {
  Component,
  inject,
  computed,
  run: { schedule }
} = Ember;

export default Component.extend(ResizeElementMixin, {
  windowResize: inject.service(),
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
    return exceptSelector.join(',');
  }),

  didInsertElement() {
    this._super(...arguments);

    // Set up window resize handler
    this.get('windowResize').on('didResize', () => {
      this.calculateItems();
    });

    // Set up event listener
    this.element.addEventListener('showMoreMenu', this._showMenu);
    this.element.addEventListener('hideMoreMenu', this._hideMenu);

    // Initial set up
    schedule('afterRender', this, this.calculateItems);
  },

  _showMenu() {
    this.set('_showMoreMenu', true);
  },

  _hideMenu() {
    this.set('_showMoreMenu', false);
  },

  willClearRender() {
    this.element.removeEventListener('showMoreMenu', this._showMenu);
    this.element.removeEventListener('hideMoreMenu', this._hideMenu);
  },

  elementResizeHandler() {
    this.calculateItems();
  },

  calculateItems() {
    const containerElement = this.$('.more-menu--container');
    const itemsContainerElement = this.$('.more-menu--items');
    const moreButtonElement = this.$('.more-menu--more-btn');
    const moreButtonId = this.get('moreButtonId');
    const moreContainerElement = $(`#${moreButtonId}-menu`);

    let itemElements = $(itemsContainerElement).find('li');
    let moreItemElements = $(moreContainerElement).find('li');

    $(itemElements).show();
    $(moreItemElements).hide();

    const containerWidth = this.getWidth(containerElement);
    const moreContainerWidth = this.getWidth(moreButtonElement);

    if (containerWidth < this.getWidth(itemsContainerElement)) {
      if (this.get('moreButtonPosition') === 'right') {
        itemElements = itemElements.get().reverse();
        moreItemElements = moreItemElements.get().reverse();
      }

      $(itemElements).each((i, itemElement) => {
        $(itemElement).hide();
        $(moreItemElements[i]).show();
        if (containerWidth - moreContainerWidth >= this.getWidth(itemsContainerElement)) {
          return false;
        }
      });
    }

    const hasHiddenItems = $(itemElements).filter(':hidden').length;
    if (hasHiddenItems) {
      $(moreButtonElement).show();
    } else {
      $(moreButtonElement).hide();
    }
  },

  getWidth(element) {
    return $(element).width();
    // return $(element).get(0).getBoundingClientRect().width;
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
