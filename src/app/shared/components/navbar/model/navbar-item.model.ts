export interface NavbarItem {
    label: string;
    routerlink: string;
}

export const MENU_USUARIO_GENERAL: NavbarItem[] = [
    {label: 'Inicio', routerlink: 'private-task'},
    {label: 'Mis Espacios', routerlink: 'espacios-usuario'},
    {label: 'Explorar', routerlink: 'explorar'},
    {label: 'Mi Perfil', routerlink: 'perfil-usuario'}
];

export const MENU_USUARIO_COLECTIVO: NavbarItem[] = [
    {label: 'Inicio', routerlink: 'inicio-colectivo'},
    {label: 'Espacios' , routerlink: 'espacios-colectivo'},
    {label: 'Publicaciones' , routerlink: 'publicaciones-colectivo'},
    {label: 'Mi Perfil', routerlink: 'perfil-colectivo'},
];

export const MENU_USUARIO_ADMIN: NavbarItem[] = [
    {label: 'Panel General', routerlink: 'panel-admin'}
];