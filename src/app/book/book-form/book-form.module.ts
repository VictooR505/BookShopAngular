import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookFormComponent } from './book-form.component';

@NgModule({
  declarations: [BookFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BookFormComponent, ReactiveFormsModule]
})
export class BookFormModule{ }
