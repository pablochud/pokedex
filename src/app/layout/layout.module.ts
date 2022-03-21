import { HeaderComponent } from './container/header/header.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
