import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private nzMessageService: NzMessageService) {

   }

   success(message: string){
    this.nzMessageService.success(message);
   }

   error(message: string){
    this.nzMessageService.error(message);
   }

   warning(message: string){
    this.nzMessageService.warning(message);
   }
}
