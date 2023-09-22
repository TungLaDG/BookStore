import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NarBarComponent } from './nar-bar/nar-bar.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailComponent } from './detail/detail.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';




@NgModule({
  declarations: [
    AppComponent,
    NarBarComponent,
    ThanhToanComponent,
    DetailComponent,
    GioithieuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CdkMenuModule,
    MatSnackBarModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
