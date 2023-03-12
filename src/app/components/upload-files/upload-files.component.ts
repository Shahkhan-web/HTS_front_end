import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit, OnChanges {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  loading = false;

  @Input() qr_id = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    console.log(this.currentFile)
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles('29JT326');
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.qr_id?.length > 0) {
      this.loading = true;
      setTimeout(() => {
        this.uploadService.getFiles(this.qr_id).subscribe((i) => {
          this.loading = false
          this.fileInfos = i
        });
      }, 3500)
    }
  }

}
