import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwowayDataBindingComponent } from './databinding/twoway-data-binding.component';
import { LifecycleComponent } from './lifecycle.component';
import { HttpComponent } from './http/http.component';
import { MyhttpService } from './http/myhttp.service';
import { PipesComponent } from './pipes/pipes.component';
import { DoublePipe } from './pipes/double.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayDataBindingComponent,
    LifecycleComponent,
    HttpComponent,
    PipesComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
