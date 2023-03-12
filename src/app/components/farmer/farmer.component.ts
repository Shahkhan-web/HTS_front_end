import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent implements OnInit {

  constructor(private uploadService: UploadFileService, private route: ActivatedRoute) { }

  honey_info:any;
  message: string;
  id: string;

  ngOnInit(): void {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.id = this.route.snapshot.paramMap.get('id');
    const regex = /^[0-9]{2}[a-zA-Z]{2}[0-9]{3}$/;
    const isValid = regex.test(this.id);
    if (!isValid) {
      this.message = 'Invalid Id'
      return
    }
      this.uploadService.get_ticket_data(this.id).subscribe((i) => {
        if (i.status === 404) {
          this.message = 'Id not found'
          return
        } 
        this.honey_info = i
      })
  }
}
