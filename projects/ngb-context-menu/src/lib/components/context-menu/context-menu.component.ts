import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbContextMenuItem, ContextMenuPosition } from '../../models/context-menu.model';

@Component({
  selector: 'ngb-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnDestroy {
  @ViewChild('myContextMenu')
  myContextMenu!: NgbDropdown | null;

  @Input()
  menuItems: NgbContextMenuItem[] | null = [];

  @Output()
  selectedMenuItem: EventEmitter<number> | null = new EventEmitter<number>();

  contextMenuPosition: ContextMenuPosition | null = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.myContextMenu?.open();

    if (this.contextMenuPosition) {
      this.contextMenuPosition.x = !!event?.clientX ? event.clientX + 'px' : this.contextMenuPosition.x + 'px';
      this.contextMenuPosition.y = !!event?.clientY ? event.clientY + 'px' : this.contextMenuPosition.y + 'px';
    }
  }

  ngOnDestroy(): void {
    this.myContextMenu = null;
    this.menuItems = null;
    this.selectedMenuItem = null;
    this.contextMenuPosition = null;
  }
}
