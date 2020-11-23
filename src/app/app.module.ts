import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
                       
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';

import { TaxComponent } from './tax/tax.component';
import { NotesComponent } from './notes/notes.component';
import { DocumentsComponent } from './documents/documents.component';
//import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    TaxComponent,
    NotesComponent,
    DocumentsComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  
    //MatButtonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
