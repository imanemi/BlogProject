import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
  {path:"",redirectTo:"/home" ,pathMatch:"full"},
   
    { path: 'home', component: HomeComponent },
    {path:'description/:id',component:DescriptionComponent},
    { path: 'blog', component: BlogContentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signout', component: HomeComponent },
    {path:'addBlog',component:AddBlogComponent},
    {path:'**',component:PageNotFoundComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
