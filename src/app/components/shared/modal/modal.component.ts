import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "@app/components/shared/modal/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnConfirmName: string;
  @Input() btnCancelName: string;
  @Output() closeConfirmation = new EventEmitter<boolean>();
  public isVisible = false;


  constructor(private modaService: ModalService) {
  }

  ngOnInit(): void {
    this.modaService.showModal$.subscribe(() => {
      this.isVisible = true;
    });
  }

  confirm(): void {
    this.closeConfirmation.emit(true);
    this.isVisible = false;
  }

  cancel(): void {
    this.closeConfirmation.emit(false);
    this.isVisible = false;
  }

}
