import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    DetailsComponent,
    PaymentComponent
  ]
})
export class UserModule { }
