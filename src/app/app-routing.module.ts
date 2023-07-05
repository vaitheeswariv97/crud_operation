import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'message',
    component: MessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
