import { countrySelect } from './../../../constants/countries';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-school-form',
    templateUrl: './school-form.component.html',
    styleUrls: ['./school-form.component.scss'],
})
export class SchoolFormComponent implements OnInit {
    countries = countrySelect;

    constructor() {}

    ngOnInit(): void {}
}
