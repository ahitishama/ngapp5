import {  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent} from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CareerComponent } from './career/career.component';

 

export const router:Routes=[
		{ path:'', component:HomeComponent,pathMatch:'full' },
		{ path:'aboutus', component:AboutusComponent},
		{ path:'services',component:ServicesComponent},
		{path:'login' ,component:LoginComponent},
		{path:'career',component:CareerComponent}
	
	


];


export const routes: ModuleWithProviders=RouterModule.forRoot(router);