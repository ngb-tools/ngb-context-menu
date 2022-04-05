import { Component } from '@angular/core';
import { NgbContextMenuItem } from '../../../ngb-context-menu';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  // #region ContextMenu
  contextMenuPosition = { x: '0px', y: '0px' };
  onContextMenu(event: MouseEvent, menu: NgbDropdown): void {
    event.preventDefault();
    menu.open();
    this.contextMenuPosition.x = !!event?.clientX ? event.clientX + 'px' : this.contextMenuPosition.x + 'px';
    this.contextMenuPosition.y = !!event?.clientY ? event.clientY + 'px' : this.contextMenuPosition.y + 'px';
  }
  onContextMenuAction(item: any): void {
    alert(`Click on Action for ${item}`);
  }
  onContextMenuSzmaFilter(event: MouseEvent): void {
    event.stopPropagation();
  }

  contextMenuItems: NgbContextMenuItem[] = [
    {
      id: 1,
      label: 'Option 1',
    },
    {
      id: 100,
      isDivider: true,
    },
    {
      id: 2,
      label: 'Option 2',
      icon: 'bi-apple',
      iconTitle: 'Option 2',
    },
    {
      id: 3,
      label: 'Option 3',
      icon: 'bi-bar-chart',
      iconTitle: 'Option 3',
    },
    {
      id: 101,
      isDivider: true,
    },
    {
      id: 4,
      label: 'Option 4',
      icon: 'bi-alarm',
      iconTitle: 'Option 4',
      disabled: true,
    },
  ];
  onSelectedContextMenuItem(selectedMenuItemId: number): void {
    alert('You chose the option with id ' + selectedMenuItemId);
  }
}
