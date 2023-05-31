import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  message: string;
  show: boolean;
  colorClass: string

  showToast(message: string, colorClass: string): void {
    this.message = message;
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 3000);
    this.colorClass = colorClass
  }
}
