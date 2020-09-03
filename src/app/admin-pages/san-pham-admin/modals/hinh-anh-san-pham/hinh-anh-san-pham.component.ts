import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-hinh-anh-san-pham',
  templateUrl: './hinh-anh-san-pham.component.html',
  styleUrls: ['./hinh-anh-san-pham.component.scss']
})
export class HinhAnhSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() tenSp;
  @Input() id;
  @Output() public onUploadFinished = new EventEmitter();
  link:any;
  dsHinhAnh:any = [];
  public progress: number;
  public message: string;

  constructor(public activeModal: NgbActiveModal,private http: HttpClient,public errorService: ErrorService,) { }

  ngOnInit() {
    this.laydsHinhAnhSP(this.id);
  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post(environment.apiUrl+environment.apiList.uploadHinhanh, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.link = event.body;
          console.log(event.body);
          this.themHinhAnh(this.id,this.link.dbPath,fileToUpload.name);
        }
      });
  }
  themHinhAnh(idSP,link,ten){
    var thongtin = {
      idSanPham : parseInt(idSP),
      linkHinhAnh : link,
      tenHinhAnh : ten,
    }
    console.log(thongtin);
    this.http
      .post(environment.apiUrl + environment.apiList.hinhAnh,thongtin, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.laydsHinhAnhSP(this.id);
          console.log("work");
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  xoaHinhAnh(idHA){ 
    this.http
      .delete(environment.apiUrl + environment.apiList.hinhAnh + idHA, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.laydsHinhAnhSP(this.id);
          console.log("work");
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  laydsHinhAnhSP(id){
    this.http
      .get(environment.apiUrl + environment.apiList.dsHinhAnhSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.dsHinhAnh = data;
          console.log(this.dsHinhAnh);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  createImgPath = (serverPath: string) => {
    return environment.Url+`${serverPath}`;
  }
  deleteHinhAnh(tenHA,id){
    var result = confirm("Bạn có muốn xóa hình ảnh '"+tenHA+"' này không?");
    if(result)  {
      this.xoaHinhAnh(id);
    } 
  }
}
