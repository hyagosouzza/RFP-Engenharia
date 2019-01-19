import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
declare var emailjs: any;

interface Alert {
    type: string;
    message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'Seu orçamento foi enviado com sucesso, verifique sua Caixa de Entrada!',
}
];

@Component({
    selector: 'app-modal-content',
    templateUrl: '../../../assets/html/modal.html'
})
export class NgbdModalContent {
    @Input() name;

    alerts: Alert[];
    alertOn: boolean = false;

    constructor(public activeModal: NgbActiveModal) {
        this.reset();
    }

    onSubmitForm() {
        var that = this;
        let myform = $("form#myform");
        myform.submit(function (event) {
            event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "default_service";
            var template_id = "contact_form";

            $('form').LoadingOverlay("show", {
                image: "",
                text: "Enviando seu orçamento...",
                textColor: '#ffa500'
            });
            emailjs.sendForm(service_id, template_id, myform[0])
                .then(function () {
                    $('form').LoadingOverlay("hide");
                    that.alertOn = true;
                    (document.getElementById('myform') as HTMLFormElement).reset();
                });
            return false;
        });

    }

    close(alert: Alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

    reset() {
        this.alerts = Array.from(ALERTS);
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
