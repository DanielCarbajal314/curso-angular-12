import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);

  personForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', Validators.required),
    hobbies: new FormArray([])
  })

  personFormWithBuilder?: FormGroup;

  get errorStyle(){
    return this.name.valid || this.name.pristine ? '' : `
      color: red;    
    `;
  }

  constructor(private fb: FormBuilder) {
    this.personFormWithBuilder = fb.group({
      name: ['', Validators.required],
      age: [0, Validators.required],
      hobbies: this.fb.array([
        
      ])
    })

  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(console.log);
  }

  addHobby(){
    const control = new FormControl('');
    this.hobbies.push(control);
  }

  get hobbies(){
    return this.personForm.get('hobbies')  as FormArray;
  }

  addHobbyWithBuilder(){
    (this.personFormWithBuilder?.get('hobbies') as FormArray).push(this.fb.control(''));
  }

}
