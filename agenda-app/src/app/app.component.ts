import { Component, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AgendaService } from './agenda.service';
import { User } from './user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda-app';
  closeResult: string;
  users : User [] = [];
  user : User;

  constructor(private modalService: NgbModal, private agendaService: AgendaService) {} 
  
  ngOnInit(){
    console.log('hola');
    this.agendaService.getAll().subscribe(
      res => {
        this.users = res.data;
        console.log(this.users);
      }
    )
  }

  delete (user: User){
    this.agendaService.deleteUser(user).subscribe( res => console.log(res) );
  }

  openModal(template: TemplateRef<any>, user: User) {
    if (user){
      this.user = user;
    }
    console.log(this.user);
    
    this.modalService.open(template); 
  }

  newUser(content) {    
    console.log(content);
    this.modalService.open(content); 
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
