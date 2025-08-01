import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReminderComponent } from './create-reminder.component';

const routes: Routes = [
  { path: '', component: CreateReminderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateReminderRoutingModule {}
