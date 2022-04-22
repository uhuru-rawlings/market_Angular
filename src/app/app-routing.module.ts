import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { HistoryComponent } from './history/history.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'cart',component:CartComponent},
  {path:'history',component:HistoryComponent},
  {path:'category',component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const navlinks = [HomepageComponent,CartComponent,HistoryComponent,CategoryComponent]
