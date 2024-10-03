import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'article', component: ArticleComponent},
    { path: 'contact', component: ContactComponent}
];
