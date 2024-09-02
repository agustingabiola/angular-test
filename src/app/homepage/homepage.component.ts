import { Component } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
})
export class HomePageComponent {
    name = "Mahisoft"

    products = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
}