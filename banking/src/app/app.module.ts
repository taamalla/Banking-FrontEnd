import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './ACCUEILS/accueil/accueil.component';
import { HeaderComponent } from './ACCUEILS/header/header.component';
import { FooterComponent } from './ACCUEILS/footer/footer.component';
import { ConnexionComponent } from './ACCUEILS/connexion/connexion.component';
import { CompteComponent } from './ACCUEILS/compte/compte.component';
import { NotFoundComponent } from './ACCUEILS/not-found/not-found.component';
import { AdminComponent } from './ADMINS/admin/admin.component';
import {FormControlName, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderAdminComponent } from './ADMINS/header-admin/header-admin.component';
import { LoginComponent } from './SECURITY/login/login.component';
import { BlogsComponent } from './ACCUEILS/blogs/blogs.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './COMPTE/client/client.component';
import { HeaderClientComponent } from './COMPTE/header-client/header-client.component';
import { OperationsComponent } from './COMPTE/operations/operations.component';
import { DemandesComponent } from './COMPTE/demandes/demandes.component';
import { AgentComponent } from './ADMINS/agent/agent.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    CompteComponent,
    NotFoundComponent,
    AdminComponent,
    HeaderAdminComponent,
    LoginComponent,
    BlogsComponent,
    ClientComponent,
    HeaderClientComponent,
    OperationsComponent,
    DemandesComponent,
    AgentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormControlName,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
