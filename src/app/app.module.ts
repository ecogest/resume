import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubsectionComponent } from './components/subsection/subsection.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [AppComponent, SubsectionComponent, SectionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
