import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ParticipantsModalComponent } from '../participants-modal/participants-modal.component';

@Component({
    selector: 'app-school-detail',
    templateUrl: './school-detail.component.html',
    styleUrls: ['./school-detail.component.scss'],
})
export class SchoolDetailComponent implements OnInit {
    modalRef: MdbModalRef<ParticipantsModalComponent>;

    constructor(private modalService: MdbModalService) {}

    ngOnInit(): void {}

    openModal(): void {
        this.modalRef = this.modalService.open(ParticipantsModalComponent, {
            modalClass: 'modal-lg',
        });
    }
}
