import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf='childSelectedAnimal'>
        <h3>Edit {{childSelectedAnimal.name}}</h3>
        <div>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedKeg.name">
       </div>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
}
