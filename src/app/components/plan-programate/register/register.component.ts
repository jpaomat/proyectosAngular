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
  get numIdentification(){
    return this.registerForm.get('numIdentification');
  }
  get numCelphone(){
    return this.registerForm.get('numIdentification');
  }
  registerForm = this.formBuilder.group({
    name: ['',{
      validators:[Validators.required,Validators.pattern(/^[a-zA-Z_-]{6,18}$/)]
    }],
    identification: ['', Validators.required],
    numIdentification: ['', {
      validattor:[Validators.required, Validators.minLength(6), Validators.maxLength(10)]
    }],
    world: [this.worldsComplete, Validators.required],
    numCelphone: ['',{
      validators:[ Validators.required, Validators.minLength(10), Validators.maxLength(10)]
    }],
    email: ['', Validators.required, Validators.email],
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
