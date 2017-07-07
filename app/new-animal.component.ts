import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';
import {Species} from './species.model';
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
        <select #newSpeciesIndex>
          <option [value]="0">Wolfs</option>
          <option [value]="1">Birds</option>
          <option [value]="2">Cats</option>
          <option [value]="3">Apes</option>
        </select>
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
      <button class='btn' (click)='submitForm(newName.value, newSpeciesIndex.value, newAge.value, newDiet.value, newZooLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)'>Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Input() childStartAdding: boolean;
  @Input() childSpeciesList: Species [];
  @Output() newAnimalSender = new EventEmitter();
  @Output() addButtonClickedSender = new EventEmitter();



  submitForm(name: string, speciesIndex: string, age: number, diet: string, zooLocation: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let dictionary = [];
    var species: string = this.childSpeciesList[speciesIndex].name;
    const newAnimal : Animal = new Animal(name, species, age, diet, zooLocation, caretakers, sex, likes, dislikes);

    this.childSpeciesList[speciesIndex].animals.push(newAnimal);

    dictionary.push ({ key: "newAnimal", value: newAnimal});
    dictionary.push ({ key: "speciesArray", value: this.childSpeciesList});
    console.log(dictionary);
    this.newAnimalSender.emit(dictionary);
  }
}
