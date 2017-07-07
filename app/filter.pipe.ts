import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Animal[], desiredFilter){
    if(desiredFilter === 'youngAnimals'){
      return input.filter(animal => animal.age<=2);
    } else if(desiredFilter === 'matureAnimals') {
      return input.filter(animal => animal.age>2);
    } else { return input; }
  }
}
