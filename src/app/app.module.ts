import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PostsComponent} from './posts/post-create/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule , MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
