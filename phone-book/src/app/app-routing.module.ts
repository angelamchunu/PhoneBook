import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhoneBookComponent} from "./components/phone-book/phone-book.component";

const routes: Routes = [
  { path: 'phone-book', component: PhoneBookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
