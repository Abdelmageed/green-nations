import { Component, OnInit, Input, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';
import { MenuItem } from "../menu-item";
import { MenuService } from "../../services/menu.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  item: MenuItem;

  @HostBinding('class.parent-is-popup')
  @Input()parentIsPopup = true;
  isActiveRoute = false;

  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private el: ElementRef,
    private renderer: Renderer
    ) { }

    onPopupMouseEnter(event) : void {
      if (!this.menuService.isVertical) {
        this.mouseInPopup = true;
      }
    }

    onPopupMouseLeave(event) : void {
      if (!this.menuService.isVertical) {
        this.mouseInPopup = false
      }
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event) : void {
      if (!this.menuService.isVertical) {
        this.mouseInItem = false;
      }
    }

    @HostListener('mouseenter', ['$event'])
    onmouseenter(event) : void {
      if (!this.menuService.isVertical) {
        if (this.item.subMenu) {
          this.mouseInItem = true;
          if(this.parentIsPopup) {
            this.popupLeft = 160;
            this.popupTop = 0;
          }
        }
      }
    }

    @HostListener('click', ['$event'])
    onclick(event) : void {

      event.stopPropagation();

      if (this.item.subMenu) {
        if (this.menuService.isVertical) {
          this.mouseInPopup = !this.mouseInPopup;
        }
      } else if (this.item.route) {
        //make all horizontal menu popups close, be sending a mouseleave event
        //such a dirty solution...
        let newEvent = new MouseEvent('mouseleave', {bubbles: true});
        this.renderer.invokeElementMethod(
          this.el.nativeElement, 'dispatchEvent', [newEvent]
        );

        this.router.navigate(['/' + this.item.route]);
      }
    }

    checkActiveRoute(route: string) {
      this.isActiveRoute = (route == '/' + this.item.route);
    }

  ngOnInit() {
    this.checkActiveRoute(this.router.url);

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkActiveRoute(event.url);
          
        }
      })
  }

}
