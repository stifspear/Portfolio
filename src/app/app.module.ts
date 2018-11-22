import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectComponent } from './project/project.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

const appRoutes = [
  {
    path: 'project-overview/:id', component: ProjectOverviewComponent
  }, {
    path: '', component: AboutmeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectComponent,
    ProjectOverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
