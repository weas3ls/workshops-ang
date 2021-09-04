import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'app-participants-modal',
    templateUrl: './participants-modal.component.html',
    styleUrls: ['./participants-modal.component.scss']
})
export class ParticipantsModalComponent implements OnInit {

    constructor(public modalRef: MdbModalRef<ParticipantsModalComponent>) {}

    ngOnInit(): void {
    }

}
