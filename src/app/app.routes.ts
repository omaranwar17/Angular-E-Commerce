import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { CartsComponent } from './layout/pages/carts/carts.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { authGuard } from './layout/shared/guards/auth.guard';
import { ForgetPasswordComponent } from './layout/pages/forget-password/forget-password.component';
import { ProductDetailsComponent } from './layout/additions/product-details/product-details.component';
import { AddressComponent } from './layout/additions/address/address.component';
import { EmailNweCodeComponent } from './layout/pages/email-nwe-code/email-nwe-code.component';
import { AllOrdersComponent } from './layout/additions/all-orders/all-orders.component';



export const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path:'login', component:LoginComponent},
{path:'register' , component:RegisterComponent},
{path:'productDetails/:id' , component:ProductDetailsComponent},
{path:'address/:id' , component:AddressComponent , canActivate:[authGuard]},
{path:'forgerPassword' , component:ForgetPasswordComponent},
{path:'emailNewCode' , component:EmailNweCodeComponent},
{path:"home", component:HomeComponent , canActivate:[authGuard]},
{path:'products', component:ProductsComponent ,canActivate:[authGuard]},
{path:'cart', component:CartsComponent , canActivate:[authGuard]},
{path:'brands', component:BrandsComponent , canActivate:[authGuard]},
{path:'allorders', component:AllOrdersComponent , canActivate:[authGuard]},
{path:'categories', component:CategoriesComponent , canActivate:[authGuard]},

{path:'**', component:NotFoundComponent},
];
