import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [NgFor, NgClass ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentDbz {



  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  /*@Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number):void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(index);
  }*/

  onDeleteCharacter(id?: string): void {
    this.onDelete.emit(id);

    if (!id) return;

  }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();




}
