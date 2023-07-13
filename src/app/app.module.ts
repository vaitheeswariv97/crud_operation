import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudShowComponent } from './crud-show/crud-show.component';
import { CrudRemoveComponent } from './crud-remove/crud-remove.component';
import { MessageComponent } from './message/message.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {
  url: 'http://192.168.34.75:5000',
  //url: 'http://localhost:5000',
  options: {},
};

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CrudShowComponent,
    CrudRemoveComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
