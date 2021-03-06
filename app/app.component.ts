import {Component} from '@angular/core';
import {Animal} from './animal.model';
import {Species} from './species.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="container">
        <h1>Local zoo</h1>
        <div class="row">
          <div class="col-md-2">
          <br><br>
            <button class="btn" (click)='startAdd()'>New animal</button>
            <br><br>
            <button class="btn" (click)='countCaretakers()'>Show caretakers</button>
          </div>
          <div class="col-md-5">
          <h3>All habitants</h3>
            <animal-list [childAnimalList]="masterAnimalList" [clildAllCaretakers]="allCaretakers" [childSpeciesList]='masterSpeciesList' (clickEditSender)='receiveEditAnimal($event)'></animal-list>
          </div>

          <!--<h3> {{countCaretakers()}}</h3>-->
          <div class="col-md-5">
          <img src="resources/images/animals.png" alt="">
            <new-animal [childStartAdding]='startAdding' [childSpeciesList]='masterSpeciesList'  (newAnimalSender)='addAnimal($event[0].value)'></new-animal>

            <edit-animal [childSelectedAnimal]='selectedAnimal' (doneButtonClickedSender)='finisfedEditing()'></edit-animal>
          </div>
        </div>

    </div>

  </div>

  `
})

export class AppComponent {
  selectedAnimal = null;
  startAdding : boolean = false;
  allCaretakers : number = 0;

  masterAnimalList: Animal[] = [
    new Animal("Moon", "Wolfs", 2, "Carnivore", "Northern Trail", 1, "Female", "Cool shade", "Loud noises"),
    new Animal("Prince", "Cats", 4, "Carnivore", "Tropical Rain Forest Building", 1, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Tinkerbell", "Apes", 8, "Herbivore", "Northern Trail", 1, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  masterSpeciesList: Species[] =[
    new Species("Wolfs"),
    new Species("Birds"),
    new Species("Cats"),
    new Species("Apes")

  ]

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
    console.log(animalToAdd);

    this.masterAnimalList.push(animalToAdd);
    this.startAdding = false;
  }

  countCaretakers()
  {
    for(let item of this.masterAnimalList)
    {
      this.allCaretakers += item.caretakers;
      // console.log(this.allCaretakers);
    }
    return this.allCaretakers;
  }

}
