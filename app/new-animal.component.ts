import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
    <div *ngIf='childStartAdding'>
      <h1>New habitant</h1>
      <div>
        <label>Enter Animal Name:</label>
        <input #newName>
      </div>
      <div>
        <label>Enter Animal Species:</label>
        <input #newSpecies>
      </div>
      <div>
        <label>Enter Animal Age:</label>
        <input #newAge>
      </div>
      <div>
        <label>Enter Animal Diet:</label>
        <input #newDiet>
      </div>
      <div>
        <label>Enter Zoo Location:</label>
        <input #newZooLocation>
      </div>
      <div>
        <label>Enter Caretakers:</label>
        <input #newCaretakers>
      </div>
      <div>
        <label>Enter Animal Sex:</label>
        <input #newSex>
      </div>
      <div>
        <label>Enter Animal Likes:</label>
        <input #newLikes>
      </div>
      <div>
        <label>Enter Animal Dislikes:</label>
        <input #newDislikes>
      </div>
      <button class='btn' (click)='submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newZooLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)'>Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Input() childStartAdding: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() addButtonClickedSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, zooLocation: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    const newAnimal : Animal = new Animal(name, species, age, diet, zooLocation, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
