import {Component, TemplateRef, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AgendaService } from './agenda.service';
import { User } from './user.model';
import {ModalComponent} from './shared/modal/modal.component';
import {UserModalComponent} from './shared/user-modal/user-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(UserModalComponent) modalComponent: UserModalComponent;

  title = 'agenda-app';
  users: User [] = [];
  user: User;

  constructor(private modalService: NgbModal, private agendaService: AgendaService) {}

  ngOnInit() {
    this.agendaService.getAll().subscribe(
      res => {
        this.users = res.data;
        console.log(this.users);
      });
  }

  refresh() {
    this.agendaService.getAll().subscribe(
      res => {
        this.users = res.data;
        console.log(this.users);
      });
  }

  delete (user: User) {
    this.agendaService.deleteUser(user).subscribe( res => console.log(res) );
    this.refresh();
  }

  openGearModal(user: User) {
    this.modalComponent.openGearModal(user);
    this.refresh();
  }

}
