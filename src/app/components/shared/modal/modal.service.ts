import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModalSource = new Subject<void>();
  public showModal$ = this.showModalSource.asObservable();

  private closeConfirmationSource = new Subject<boolean>();
  //public closeConfirmation$ = this.closeConfirmationSource.asObservable();

  public openConfirmationModal(): void {
    this.showModalSource.next();
  }

  public closeConfirmationModal(confirmed: boolean): void {
    this.closeConfirmationSource.next(confirmed);
  }
}
