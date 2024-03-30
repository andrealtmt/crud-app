import { Component } from '@angular/core';
import { StudentService, Student } from '../service/student.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalLoginPage } from './modal-login/modal-login.page';
import { ModalSignupPage } from './modal-signup/modal-signup.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students: Student[] = [];

  constructor(
	private service: StudentService,
	private alertCtrl:AlertController,
	private modalCtrl:ModalController){}

  ngOnInit(){
    this.service.getAll().subscribe(response => {
      this.students = response;
    });
  }

  removeStudent(id: string){
		this.alertCtrl
		.create({
			header: 'Eliminar',
			message: '¿Está seguro de eliminar?',
			buttons: [
				{
					text: 'Si',
					handler: () =>{
						this.service.remove(id).subscribe(() => {
							this.students = this.students.filter(std => std.id !== id);
						});
					}
				},
				{ text: 'No' }
			]
		})
		.then(alertEl => alertEl.present());
	}

	signUp(){
		this.modalCtrl
		.create({
			component: ModalSignupPage
		})
		.then(modal => modal.present());
	}

	login(){
		this.modalCtrl
		.create({
			component: ModalLoginPage
		})
		.then(modal => modal.present());
	}

	/* updateStudent(student:Student){
		this.modalCtrl
		.create({
			component: StudentModalPage,
			componentProps: { student }
		})
		.then(modal => {
			modal.present();
			return modal.onDidDismiss();
		})
		.then(({data, role}) => {
			this.students = this.students.filter(std => {
				if(data.id === std.id){
					// Retorna el estudiante actualizado
					return data;
				}
				return std;
			});
		});
	} */

}
