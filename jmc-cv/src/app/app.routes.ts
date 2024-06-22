import { Routes } from '@angular/router';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

export const routes: Routes = [
    {title: "Juan Martín Candela", path:"presentacion", component: PresentacionComponent},
    {title: "Tecnologías", path:"tecnologias", component: TecnologiasComponent},
    {pathMatch: "full", path: '', redirectTo:"/presentacion"},
    {path: "**", redirectTo: "/presentacion"}
];
