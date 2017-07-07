import {Pipe, PipeTransform} from '@angular/core';
import {Species} from './species.model';

@Pipe({
  name: "speciesFilter",
  pure: false
})

export class SpeciesFilterPipe implements PipeTransform {
  transform(input: Species[], desiredFilter){
    // for (let i = 0; i < input.length; i++) {
    //   console.log(input);
    //     if(input[i].name === desiredFilter) {
    //       console.log(input[i].animals);
    //       return input[i].animals;
    //   }
    // }
  }
}
