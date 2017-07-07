import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>
  
  <h4 *ngFor="let currentAnimal of childAnimalList"><strong> <h3>{{currentAnimal.name}}</h3></strong>
    <ul>
      <li>Species: {{currentAnimal.species}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Zoo location: {{currentAnimal.zooLocation}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
    </ul>
    <button (click)="editButtonClicked(currentAnimal)">Edit</button>
  </h4>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList : Animal[];
  @Output() clickEditSender = new EventEmitter();

  editButtonClicked(currentAnimal: Animal)
  {
    this.clickEditSender.emit(currentAnimal);
  }
}
