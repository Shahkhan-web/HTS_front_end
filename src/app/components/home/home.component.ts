import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'HTS';
  qr_id : string
  
  test(e) {
    this.qr_id = e?.id
  }
}
