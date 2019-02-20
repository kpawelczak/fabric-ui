import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricGuiModule } from './chip/fabric-gui.module'

@NgModule({
  declarations: [
    AppComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    FabricGuiModule
  ],
  exports: [
    FabricGuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
