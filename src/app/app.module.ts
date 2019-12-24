import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import {TextEditorComponent} from './texteditor/texteditor.component';
import { DetailspostComponent } from './detailspost/detailspost.component';
@NgModule({
  declarations: [
    AppComponent,
    PagecontentComponent,
    TextEditorComponent,
    DetailspostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
