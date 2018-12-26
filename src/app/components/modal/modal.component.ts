import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    templateUrl: '../../../assets/html/modal.html'
})
export class NgbdModalContent {
    @Input() name;
    selectedFiles: any;

    constructor(public activeModal: NgbActiveModal) { }

    submitForm() {
        (document.getElementById("contactForm") as HTMLFormElement).submit();
    }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) { }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        modalRef.componentInstance.name = 'World';
    }
}
