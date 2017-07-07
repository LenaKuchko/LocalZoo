import {Component} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local zoo</h1>
    <h3>All habitants</h3>
    <h3> {{countCaretakers()}}</h3>
    <button (click)='startAdd()'>New animal</button>
    <new-animal [childStartAdding]='startAdding' (newAnimalSender)='addAnimal($event)'></new-animal>
    <animal-list [childAnimalList]="masterAnimalList" (clickEditSender)='receiveEditAnimal($event)'></animal-list>
    <edit-animal [childSelectedAnimal]='selectedAnimal' (doneButtonClickedSender)='finisfedEditing()'></edit-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  startAdding : boolean = false;
  allCaretakers : number = 0;

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 1, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 1, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 1, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  receiveEditAnimal(clickedAnimal: Animal)
  {
    this.selectedAnimal = clickedAnimal;
  }

  finisfedEditing()
  {
    this.selectedAnimal = null;
  }

  startAdd()
  {
    this.startAdding = true;
  }

  addAnimal(animalToAdd: Animal) {
    this.masterAnimalList.push(animalToAdd);
    this.startAdding = false;
  }

  countCaretakers()
  {
    for(let item in this.masterAnimalList)
    {
      this.allCaretakers += this.masterAnimalList[item].caretakers;
      console.log(this.masterAnimalList);
      console.log(item);
    }
    return this.allCaretakers;
  }
}
