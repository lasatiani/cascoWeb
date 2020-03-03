import { Component, OnInit } from '@angular/core';
import {PurchaseForm} from 'src/app/models/purchase-form'

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {

  constructor() { }

  PurchaseModel:PurchaseForm;
  status;

  ngOnInit(): void {
    this.PurchaseModel = new PurchaseForm();
  }

}
