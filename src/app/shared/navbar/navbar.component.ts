import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import {Router} from '@angular/router';

const PREFIX_URL = 'assets/img/';
const WHITE_LOGO: Logo = {
    url: PREFIX_URL + 'white-logo.png',
    width: 250,
};
const COLORED_LOGO: Logo = {
    url: PREFIX_URL + 'logo-rfp.png',
    width: 200,
};

interface Logo {
    url: string,
    width: number,
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    private toggleButton: any;
    private sidebarVisible: boolean;

    logo = WHITE_LOGO;

    constructor(
            private renderer: Renderer,
            private element: ElementRef,
            private _router: Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        const sticky: HTMLElement = this.element.nativeElement.getElementsByClassName('sticky-to-up')[0];
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 170 || window.pageYOffset > 170) {
                // add logic
                this.logo = COLORED_LOGO;
                sticky.classList.remove('noshow');
            } else {
                // remove logic
                this.logo = WHITE_LOGO;
                sticky.classList.add('noshow');
            }
        });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;

    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        //const toggleButton = this.toggleButton;
        //const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    homePage(): void {
        this._router.navigate(['/']);
    }

}
