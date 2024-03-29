import {Component} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {catchError, finalize, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

interface Alert {
    type: string;
    message: string;
}

const ALERT_SUCCESS: Alert = {
    type: 'success',
    message: 'Seu orçamento foi enviado, verifique a sua Caixa de Entrada',
};


const ALERT_ERROR: Alert = {
    type: 'danger',
    message: 'Ocorreu um erro ao enviar o seu orçamento, tente novamente mais tarde ou entre em contato',
};

@Component({
    selector: 'app-modal-content',
    templateUrl: '../../../assets/html/modal.html',
})
export class ModalContentComponent {

    alertSuccess = ALERT_SUCCESS;
    sent = false;

    error = false;
    alertError = ALERT_ERROR;

    loading = false;

    constructor(
            private readonly _activeModal: NgbActiveModal,
            private readonly _httpClient: HttpClient,
    ) {
        this.reset();
    }

    sendEmail(form: HTMLFormElement): void {
        this.reset();
        this.loading = true;
        const formData = new FormData(form);
        const {apiUrl, templateId, userId, serviceId} = environment.emailjs;
        formData.append('service_id', serviceId);
        formData.append('template_id', templateId);
        formData.append('user_id', userId);
        this._httpClient.post(apiUrl, formData).pipe(
                map(response => {
                    console.log(response);
                    this.sent = true;
                }),
                catchError(err => {
                    console.error(err);
                    this.sent = true;
                    throw err;
                }),
                finalize(() => this.loading = false)
        ).subscribe();
    }

    reset(): void {
        this.sent = false;
        this.error = false;
    }

    close(): void {
        this._activeModal.close();
    }

}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class ButtonModalComponent {

    constructor(private readonly _modalService: NgbModal) { }

    open() {
        this._modalService.open(ModalContentComponent, {size: 'lg'});
    }
}
