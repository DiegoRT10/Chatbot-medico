import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss'
})
export class ChatDialogComponent implements OnInit{
  tiles: Tile[] = [
    {text: 'Consultas', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Medicamentos', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Suministros Médicos', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Servicios Farmacéuticos', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(

  ){

  }
  ngOnInit(): void {

  }

}
