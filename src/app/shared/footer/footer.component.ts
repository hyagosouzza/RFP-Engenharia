import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

const IMG_PREFIX = 'assets/img/';
const WHATSAPP_LINK_PREFIX = 'https://wa.me/+55';

interface Contact {
    address: string;
    city: string;
    phone?: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    maps: SafeResourceUrl;
    instagram: string;
}

interface Image {
    url: string;
    size: number;
}

const buildImage = (url: string, size = 100): Image => {
    return {url, size};
};

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    imgPrefix = IMG_PREFIX;

    images: Image[] = [
        buildImage('bv.svg'),
        buildImage('logo-solfacil.svg', 200),
        buildImage('santander.svg', 200),
        buildImage('sicredi.svg', 200),
        buildImage('bb.svg'),
        buildImage('goiasfomento.png'),
    ];

    contacts: Contact[] = [
        {
            address: 'Av. Fernando Costa, QD 34 - Lt 08A - Vila Jaiara',
            city: 'Anápolis - GO, 75064-780',
            whatsapp: '(62) 98146-0848',
            whatsappLink: WHATSAPP_LINK_PREFIX + '62981460848',
            email: 'RPFENGENHARIAEENERGIA@GMAIL.COM',
            maps: this._sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245102.0364' +
                    '3213783!2d-49.11102358359375!3d-16.2861498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea1f3f95ca58d%3A0' +
                    'x258264e40f75f4a1!2sRPF%20Engenharia%20%26%20Energia!5e0!3m2!1spt-BR!2sbr!4v1648901853117!5m2!1spt-BR!2sbr'),
            instagram: 'https://www.instagram.com/rpfengenhariaeenergia/'
        },
        {
            address: 'Av. Perimetral, QD 75 - LT11 - Centro',
            city: 'Britânia - GO, CEP: 76.280-000',
            phone: '(62) 3383-1245',
            whatsapp: '(62) 98294-1245',
            whatsappLink: WHATSAPP_LINK_PREFIX + '62982941245',
            email: 'RPFENGENHARIAECONSTRUCOES@GMAIL.COM',
            maps: this._sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246249.7140807009' +
                    '7!2d-50.999390397713285!3d-15.341147618731563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9368bbc0707b35a7%' +
                    '3A0xcef4ade61839228c!2sRPF%20Engenharia%20e%20Materiais%20para%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1648' +
                    '901798577!5m2!1spt-BR!2sbr'),
            instagram: 'https://www.instagram.com/rpfengenhariaeenergia/'
        }
    ]

    constructor(private readonly _sanitizer: DomSanitizer) { }

    ngOnInit() {}

}
