# NgbContextMenu

NgbContextMenu is a small Angular library based on the NG-Bootstrap Library that will allow you to easily render a context menu using a directive and providing the options with different properties. We also provide an example of using the bootstrap library to render a totally customizable context menu.

## Install Guide

### Preconditions
In order to use the NgbContextMenu your project needs the [NG-Bootstrap](https://ng-bootstrap.github.io/)

### Installation Steps
1. Install the NgbContextMenu from npmJS. Latest stable version is vXX.XX.XX
2. Import the NgbContextMenu module in the module you want to use the directive

## Usage

Inside the HTML Template use the `ngbContextMenu` directive and provide the `menuItems`

    <div  ngbContextMenu 
          [menuItems]="contextMenuItems" 
          (selectedMenuItem)="onSelectedContextMenuItem($event)"
    </div

The `menuItems` attribute should contain a list of items using this model:

    interface NgbContextMenuItem {
      id: number;
      label?: string;
      icon?: string;        // in case you want an icon to be rendered in front of the label 
      iconTitle?: string;   // tooltip for your icon
      disabled?: boolean;   // mark the item as disabled
      isDivider?: boolean;  // render a line divider between items
    }

When one item (dividers excluded) is clicked the `selectedMenuItem` Event is emitted. The Event will emit the `id` of the clicked item

## Customization

The styles can be customized by overwriting the CSS Classes as follows:

The Menu Container: `.ngb-context-menu {}`

The Divider: `.ngb-context-menu-divider {}`

The Items: `.ngb-context-menu-item {}`


## Play with a real example

If you want to play with some context menus you can clone the repository and run the demo project using the command:

    $ ng serve demo

Or [StackBlitz](https://stackblitz.com/edit/angular-ivy-vmu9qg)
