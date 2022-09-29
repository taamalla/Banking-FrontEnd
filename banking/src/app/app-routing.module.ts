import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './ACCUEILS/accueil/accueil.component';
import {ConnexionComponent} from './ACCUEILS/connexion/connexion.component';
import {NotFoundComponent} from './ACCUEILS/not-found/not-found.component';
import {CompteComponent} from './ACCUEILS/compte/compte.component';
import {AdminComponent} from './ADMINS/admin/admin.component';
import {LoginComponent} from './SECURITY/login/login.component';
import {AuthGuard} from './SECURITY/guards/auth.guard';
import {BlogsComponent} from './ACCUEILS/blogs/blogs.component';
import { ClientComponent } from './COMPTE/client/client.component';
import { OperationsComponent } from './COMPTE/operations/operations.component';
import { DemandesComponent } from './COMPTE/demandes/demandes.component';
import { AgentComponent } from './ADMINS/agent/agent.component';
import { RandomGuard } from './SECURITY/guards/random.guard';


const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'admin', component: AdminComponent, canActivate: [RandomGuard],canLoad: [RandomGuard]},
  { path: 'agentBancaire', component: AgentComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'connexion', component: ConnexionComponent,canActivate: [AuthGuard]},
  { path: 'mycompte', component: ClientComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'operations', component: OperationsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'demande', component: DemandesComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'compte', component: CompteComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'accueil', component: AccueilComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'blogs', component: BlogsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
