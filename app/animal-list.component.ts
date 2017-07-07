import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';
import {Species} from './species.model';

@Component({
  selector: 'animal-list',
  template: `
  <h3>Filtering by Age:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>
  <h3>Animals by Species:</h3>
  <select (change)="showAnimalsBySpecies($event.target.value)">
    <option *ngFor="let species of childSpeciesList" [(ngValue)]="species.name">{{species.name}}</option>
  </select>

  <!-- <h3>Needs caretakers: {{clildAllCaretakers}}</h3>-->

  <h4 *ngFor="let currentAnimal of childAnimalList | filter:sortFilter"><strong> <h3>{{currentAnimal.name}}</h3></strong>
    <ul>
      <li>Species: {{currentAnimal.species}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Zoo location: {{currentAnimal.zooLocation}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
      <li>Admittion Day: {{currentAnimal.admittionDate}}</li>
    </ul>
    <button class="btn" (click)="editButtonClicked(currentAnimal)">Edit</button>
  </h4>
  `
})

export class AnimalListComponent {
  sortFilter : string = "allAnimals";
  speciesFilter : string = "";
  @Input() childAnimalList : Animal[];
  @Input() childSpeciesList : Species [];
  @Input() clildAllCaretakers : number;
  @Output() clickEditSender = new EventEmitter();

  editButtonClicked(currentAnimal: Animal)
  {
    this.clickEditSender.emit(currentAnimal);
  }

  onChange(optionFromMenu)
  {
    this.sortFilter = optionFromMenu;
  }

  showAnimalsBySpecies(optionFromMenu)
  {
    this.speciesFilter = optionFromMenu;
    console.log(this.speciesFilter);
  }

}
