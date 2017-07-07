import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AnimalListComponent} from './animal-list.component';
import {EditAnimalComponent} from './edit-animal.component';
import {NewAnimalComponent} from './new-animal.component';
import {FilterPipe} from './filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  FilterPipe
                ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
