import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';

const routes: Routes = [
  {path:'chat', component: ChatDialogComponent},
  {path:'medicamento/:id', component: MedicamentoComponent},
  {path:'**', pathMatch:'full', redirectTo:'chat'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
