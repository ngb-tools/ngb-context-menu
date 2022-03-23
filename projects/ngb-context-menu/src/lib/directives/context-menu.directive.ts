import { ComponentRef, Directive, EventEmitter, HostListener, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import {NgbContextMenuItem} from "../models/context-menu.model";
import {ContextMenuComponent} from "../components/context-menu/context-menu.component";

@Directive({
  selector: '[ngbContextMenu]',
  providers: [NgbDropdown],
})
export class ContextMenuDirective implements OnInit {
  @Input()
  menuItems: NgbContextMenuItem[] = [];

  @Output()
  selectedMenuItem: EventEmitter<number> = new EventEmitter<number>();

  contextMenuComponentRef!: ComponentRef<ContextMenuComponent>;

  constructor(public viewContainerRef: ViewContainerRef) {}

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    this.contextMenuComponentRef.instance.onContextMenu(event);
  }

  ngOnInit(): void {
    this.contextMenuComponentRef = this.viewContainerRef.createComponent(ContextMenuComponent);
    this.contextMenuComponentRef.instance.menuItems = this.menuItems;
    this.contextMenuComponentRef.instance.selectedMenuItem?.subscribe((selectedId: number) => this.selectedMenuItem.emit(selectedId));
  }
}
