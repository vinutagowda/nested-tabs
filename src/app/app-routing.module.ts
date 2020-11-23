import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxComponent } from './tax/tax.component';
import { NotesComponent } from './notes/notes.component';
import { DocumentsComponent } from './documents/documents.component';


const routes: Routes = [
  {path:'tax',component:TaxComponent},
  {path:'notes',component:NotesComponent},
  {path:'documents',component:DocumentsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
