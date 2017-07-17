export interface MenuItem {
    text: string,
    icon: string,
    route: string,
    subMenu: Array<MenuItem>
}