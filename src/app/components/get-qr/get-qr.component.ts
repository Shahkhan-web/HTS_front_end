import { Component } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-get-qr',
  templateUrl: './get-qr.component.html',
  styleUrls: ['./get-qr.component.scss']
})
export class GetQrComponent {
  id: string;
  message: string;
  qr_src: any
  loading = false

  constructor(private uploadService: UploadFileService) { }
  getqr() {
    if (this.id.length < 7 || this.id.length > 7) {
      this.message = "Invalid Id"
    }
    else { 
      this.loading = true;
      this.uploadService.getFiles(this.id).subscribe((i) => { 
        console.log(i)
        this.loading = false
        this.qr_src = i
        this.message = ''
      }) 
    }
  }
}
