import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EventoComponent } from './evento/evento.component';
import { GrupoComponent } from './grupo/grupo.component';

export const routes: Routes = [


    {path: "", component: FeedComponent},
    {path: "perfil", component: PerfilComponent},
    {path: "eventos", component: EventoComponent},
    {path: "grupos", component: GrupoComponent},
];
