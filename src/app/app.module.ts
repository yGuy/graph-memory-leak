import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    WorkspaceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
