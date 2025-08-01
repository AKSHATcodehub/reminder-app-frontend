// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'reminders',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/reminder-list/reminders.module').then(m => m.RemindersModule)
  },
  {
    path: 'create-reminder',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/create-reminder/create-reminder.module').then(
        m => m.CreateReminderModule
      )
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
