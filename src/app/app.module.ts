import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { inventoryReducer } from './store/reducers/inventory.reducer';
import { wishlistReducer } from './store/reducers/wishlist.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      inventory: inventoryReducer,
      wishlist: wishlistReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
