import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DoneComponent } from './pages/Done/done.component';
import { InprogressComponent } from './pages/Inprogress/inprogress.component';
import { InreviewComponent } from './pages/Inreview/inreview.component';
import { TodoComponent } from './pages/Todo/todo.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: 'Done', component: DoneComponent},
  {path: 'Inprogress', component: InprogressComponent},
  {path: 'Inreview', component: InreviewComponent},
  {path: 'Todo', component: TodoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    InprogressComponent,
    InreviewComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }