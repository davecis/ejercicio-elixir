import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  @Output() sendForm = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  @Input() title: string;
  @Input() acceptButtonText?: string;
  @Input() cancelButtonText?: string;
  @Input() options?: NgbModalOptions;
  @Input() modalForm?: NgForm;

  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    if (!this.acceptButtonText) {
      this.acceptButtonText = 'Aceptar';
    }
    if (!this.cancelButtonText) {
      this.cancelButtonText = 'Cancelar';
    }
  }

  onSendForm() {
    this.sendForm.emit();
  }

  open() {
    this.modalRef = this.modalService.open(this.content, this.options);
  }

  close() {
    this.modalRef.close();
  }

  onCloseModal() {
    this.closeModal.emit();
  }
}
