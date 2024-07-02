import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FooterComponent, HeaderComponent, SharedLibraryComponent, SidebarComponent, getStoreModule, msalAuthModule } from '@mezomon/shared-library-test';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    msalAuthModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    getStoreModule(),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
        connectInZone: true,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
