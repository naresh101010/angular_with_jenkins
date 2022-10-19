import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './test/child/child.component';





@NgModule({
  declarations: [AppComponent, TestDirectiveDirective, TestComponent, ChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
