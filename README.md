<h1 align="center">Ember-more-menu</h1>

[![npm version](https://badge.fury.io/js/ember-more-menu.svg)](https://badge.fury.io/js/ember-more-menu)
[![npm](https://img.shields.io/npm/dm/ember-more-menu.svg)]()
[![Build Status](https://travis-ci.org/mayko780/ember-more-menu.svg?branch=master)](https://travis-ci.org/mayko780/ember-more-menu)
[![Ember Observer Score](http://emberobserver.com/badges/ember-more-menu.svg)](http://emberobserver.com/addons/ember-more-menu)
[![Dependency Status](https://david-dm.org/mayko780/ember-more-menu.svg)](https://david-dm.org/mayko780/ember-more-menu)
[![devDependency Status](https://david-dm.org/mayko780/ember-more-menu/dev-status.svg)](https://david-dm.org/mayko780/ember-more-menu#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/mayko780/ember-more-menu.svg)](https://greenkeeper.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A horizontal responsive menu component which hides items that don't fit in a dropdown more menu.

### [Demo](https://mayko780.github.io/ember-more-menu/)

[![ember-more-menu in action](https://raw.githubusercontent.com/mayko780/ember-more-menu/master/ember-more-menu-demo.gif)](https://mayko780.github.io/ember-more-menu/)

## Installation

In your application's directory

* `ember install ember-more-menu`

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
