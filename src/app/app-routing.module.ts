import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MyPortfolioPageComponent } from './my-portfolio-page/my-portfolio-page.component';


const routes: Routes = [
  { path: '', component: MyPortfolioPageComponent},
  { path: 'imprint', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { 
  
}
