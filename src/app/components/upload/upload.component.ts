import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UploadFileService } from 'src/app/services/upload-file.service'; 

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  ticket_generater: FormGroup = new FormGroup({});
  message = '';
  qr_id : any;

  @Output() id = new EventEmitter<string>();

  constructor(private uploadService: UploadFileService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.ticket_generater = this.formBuilder.group({
      honey_type: new FormControl('', [Validators.required]),
      honey_origin: new FormControl('', [Validators.required]),
      honey_weight: new FormControl('', [Validators.required]),
      honey_coordinates: new FormControl('', [Validators.required]),
      h_m_f: new FormControl('', [Validators.required]),
      moister: new FormControl('', [Validators.required]),
      acidity: new FormControl('', [Validators.required]),
      ph: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      electrical_cunductivity: new FormControl('', [Validators.required]),
      diastate: new FormControl('', [Validators.required]),
    })
  }

  submit(){
    if(this.ticket_generater.valid){
      this.message = ''
      var date_time = new Date().toLocaleString(); 
      const datatosend = {timeStamp:date_time,honeyInfo:this.ticket_generater.value}
      console.log(datatosend)
      this.uploadService.generate_ticket(datatosend).subscribe(i=>{
          this.ticket_generater.reset()
          this.qr_id = i
          this.id.emit(this.qr_id.body) 
      }) 
    }
    else{
      this.message = 'Please enter valid data'
    }
  }

}
