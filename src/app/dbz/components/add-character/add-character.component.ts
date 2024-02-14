import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onnewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABD',
    power: 0,
  };

  emitCharacter():void {


    console.log(this.character)

    if (this.character.name.length === 0) return;

    this.onnewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
    //this.character.name='';
    //this.character.power=0;
  }

}
