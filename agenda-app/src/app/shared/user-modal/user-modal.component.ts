import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {User} from '../../user.model';
import {AgendaService} from '../../agenda.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @ViewChild(ModalComponent) gearModal: ModalComponent;

  user: User;
  name: string;
  number: string;

  constructor( private agendaService: AgendaService) { }

  ngOnInit() {
  }

  openGearModal(user: User) {
    if (user) {
      this.user = user;
    }
    this.gearModal.open();
  }

  closeGearMadal() {
    this.gearModal.close();
  }

  save() {
    if (this.user) {
      console.log(this.user);
      this.agendaService.updateUser(this.user).subscribe(
        res => {
          console.log(res);
          this.reset();
          this.closeGearMadal();
        }
      );
    } else {
      const us: User = {
        name: this.name,
        number: this.number
      };
      console.log(us);
      this.agendaService.newUser(us).subscribe(
        res => {
          console.log(res);
          this.reset();
          this.closeGearMadal();
        }
      );
    }
  }

  reset() {
    this.user = null;
    this.name = '';
    this.number = '';
  }

}
