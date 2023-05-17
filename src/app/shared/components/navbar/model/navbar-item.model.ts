export interface NavbarItem {
    label: string;
    routerlink: string;
}

export const MENU_USUARIO_GENERAL: NavbarItem[] = [
    {label: 'Inicio', routerlink: 'rutaInicio'},
    {label: 'Mis Espacios', routerlink: 'rutaMisEspacios'},
    {label: 'Explorar', routerlink: 'rutaExplorar'},
    {label: 'Mi Perfil', routerlink: 'rutaMiPerfil'}
];

export const MENU_USUARIO_COLECTIVO: NavbarItem[] = [
    {label: 'Espacios' , routerlink: 'rutaEspacios'},
    {label: 'Publicaciones' , routerlink: 'rutaPublicaciones'},
    {label: 'Mi Perfil', routerlink: 'rutaMiPerfil'},
];

export const MENU_USUARIO_ADMIN: NavbarItem[] = [
    {label: 'Panel General', routerlink: 'rutaPanelGeneral'}
];