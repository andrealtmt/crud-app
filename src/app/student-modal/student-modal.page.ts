import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { StudentService, Student } from '../service/student.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.page.html',
  styleUrls: ['./student-modal.page.scss'],
})
export class StudentModalPage implements OnInit {
  @Input() student: any;
	//Revisar si el modal es usado para actualizar o no.
	isUpdate = false;
	//Datos para actualizar
	data = {
		name: '',
		address: '',
		phone: ''
	};

  constructor(
    private modalCtrl:ModalController,
    private service: StudentService
  ) { }

  ngOnInit() {
    // si no es nulo, la ventana modal está en modo update
    if(this.student){
      this.isUpdate = true;
      this.data = this.student;
    }
  }

  // método para cerrar la ventana modal
  closeModal(){
    this.modalCtrl.dismiss(null, 'closed');
  }

  onSubmit(form: NgForm){
		const student = form.value;
		
    if(this.isUpdate){
			this.service.update(student, this.student.id).subscribe(() => {
				//Agregar ID al objeto del estudiante actualizado
				student.id = this.student.id;
				this.modalCtrl.dismiss(student, 'updated');
			});
		}
		else{
			this.service.create(student).subscribe(response => {
				//Después de guardar, cerramos la ventana modal, enviando un rol 'created'
				this.modalCtrl.dismiss(response, 'created');
			});
		}		
	}

}
