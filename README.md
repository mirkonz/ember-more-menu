# Ember-more-menu
<!-- [![Build Status](https://travis-ci.org/mayko780/ember-more-menu.svg?branch=master)](https://travis-ci.org/mayko780/ember-more-menu) -->
<!-- [![npm Version][npm-badge]][npm]
[![Build Status][travis-badge]][travis] -->

[![Ember Observer Score](http://emberobserver.com/badges/ember-more-menu.svg)](http://emberobserver.com/addons/ember-more-menu)
[![npm version](https://badge.fury.io/js/ember-more-menu.svg)](https://badge.fury.io/js/ember-more-menu)
[![Dependency Status](https://david-dm.org/mayko780/ember-more-menu.svg)](https://david-dm.org/mayko780/ember-more-menu)
[![devDependency Status](https://david-dm.org/mayko780/ember-more-menu/dev-status.svg)](https://david-dm.org/mayko780/ember-more-menu#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/mayko780/ember-more-menu.svg)](https://greenkeeper.io/)
<!-- [![Greenkeeper badge](https://badges.greenkeeper.io/mayko780/ember-more-menu.svg)](https://greenkeeper.io/) -->


A horizontal responsive menu component which hides items that don't fit in a dropdown more menu.

![ember-more-menu in action](https://raw.githubusercontent.com/mayko780/ember-more-menu/master/ember-more-menu-demo.gif)

## Installation

In your application's directory

* `ember install ember-more-menu`
* `ember install ember-resize`
* `ember install ember-tether`
* `ember install ember-truth-helpers`
* `ember install ember-composable-helpers`
* `ember install ember-click-outside`
* `npm install --save-dev ember-browserify`
* `npm install --save-dev css-element-queries`

*(This is work in progress: Eventually it will be just `ember install ember-more-menu`)*
## Examples

```javascript
const items = [{
  text: "Home",
  linkTo: "ROUTE_NAME"
}, {
  text: "About",
  linkTo: "ROUTE_NAME"
}, {
  text: "Contact",
  linkTo: "ROUTE_NAME"
}, {
  text: "External link",
  href: "#"
}, {
  text: "Static text"
}];
```

### Basic example

```hbs
{{more-menu items=items}}
```

---

### Advanced example

```hbs
{{#more-menu
  items=items
  moreButtonText="More options"
  moreButtonClass="btn"
  targetAttachmentPosition="bottom center"
  attachmentPosition="top center"
  as |section|
}}
  {{#if (eq section "menu")}}
    <ul class="nav flex-nowrap">
      {{#each items as |item|}}
        <li>
          <a href="#" class="nav-link">{{item.text}}</a>
        </li>
      {{/each}}
    </ul>
  {{/if}}

  {{#if (eq section "more")}}
    <ul class="nav flex-column">
      {{#each items as |item|}}
        <li class="nav-item">
          <a href="#" class="nav-link">{{item.text}}</a>
        </li>
      {{/each}}
    </ul>
  {{/if}}
{{/more-menu}}
```

## View Demo

* Clone this repo: `git clone https://github.com/mayko780/ember-more-menu.git`
* `cd ember-more-menu`
* `npm install`
* `ember serve`
* Visit [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
