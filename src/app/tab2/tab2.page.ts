
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email: string = 'Email';    // Eğer email de varsa, bunu tanımlayın
  password: string = '*'; // Yeni password alanını ekleyin
  constructor() {}

}