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
          <input [(ngModel)]="childSelectedAnimal.name">
        </div>
        <div>
          <label>Enter Animal Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species">
        </div>
        <div>
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
        </div>
        <div>
          <label>Enter Animal Diet:</label>
          <input [(ngModel)]="childSelectedAnimal.diet">
        </div>
        <div>
          <label>Enter Zoo Location:</label>
          <input [(ngModel)]="childSelectedAnimal.zooLocation">
        </div>
        <div>
          <label>Enter Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
        </div>
        <div>
          <label>Enter Animal Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex">
        </div>
        <div>
          <label>Enter Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes">
        </div>
        <div>
          <label>Enter Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
        </div>
        <button (click)='doneButtonClicked()' class='btn'>Save changes</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked()
  {
    this.doneButtonClickedSender.emit();
  }
}
