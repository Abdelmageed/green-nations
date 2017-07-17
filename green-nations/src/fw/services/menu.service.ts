import { Injectable } from '@angular/core';
import { MenuItem } from "../menus/menu-item";

@Injectable()
export class MenuService {
    
    items: Array<MenuItem>;
    isVertical = false;
    showingLeftSideMenu = false;

    toggleLeftSideMenu(): void {
        this.isVertical = true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    }

    closeLeftSideMenu(): void {
        this.showingLeftSideMenu = false;
    }

    toggleMenuOrientation(): void {
        this.isVertical = !this.isVertical;
    }
}