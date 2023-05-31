import { Component } from '@angular/core';
import { ModalService } from "@app/components/shared/modal/modal.service";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  constructor(private modalService: ModalService) {
  }

  openConfirmationModal(): void {
    this.modalService.openConfirmationModal()
  }

  deleteItem( confirmed: boolean): void {
   if(confirmed) {
      console.log('confirmou')
   }
  }

}
