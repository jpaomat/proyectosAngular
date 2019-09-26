import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PeticionesService } from 'src/app/shared/services/peticiones.service';
import {environment} from 'src/environments/environment'
import { World } from 'src/app/shared/interfaces/world';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  worldURL=environment.worldUrl;
  worldsComplete:World[];
  constructor(private peticionesService: PeticionesService, private formBuilder: FormBuilder) { }

  get name(){
    return this.registerForm.get('name');
  }
  get identification(){
    return this.registerForm.get('identification');
  }
  get numIdentification(){
    return this.registerForm.get('numIdentification');
  }
  get world(){
    return this.registerForm.get('world');
  }
  get numCelphone(){
    return this.registerForm.get('numCelphone');
  }
  get email(){
    return this.registerForm.get('email');
  }
  registerForm = this.formBuilder.group({
    name: ['',{
      validators:[Validators.required,Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]+")]
    }],
    identification: ['', Validators.required],
    numIdentification: ['', {
      validattor:[Validators.required, Validators.minLength(6), Validators.maxLength(10),Validators.pattern("[0-9]")]
    }],
    world: [this.worldsComplete, Validators.required],
    numCelphone: ['',{
      validators:[ Validators.required, Validators.minLength(10), Validators.maxLength(10)]
    }],
    email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
    remember: [true, Validators.required]
  });

  worlds: any[] = [];
  ngOnInit() {
    this.peticionesService.httpGet(this.worldURL).subscribe((record: World[]) => {
      this.worldsComplete = record;
      for (let item in this.worldsComplete) {
        this.worlds.push(
          { name: this.worldsComplete[item].name }
        )
      }
    }, err => console.error(err))
  }
  saveForm() {
    console.log(this.registerForm.value);
  }



}
