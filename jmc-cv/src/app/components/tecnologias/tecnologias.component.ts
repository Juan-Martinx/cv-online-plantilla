import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent implements OnInit{

  constructor(private scrollService: ScrollService){}
  effect = "";

  ngOnInit(): void {
    if(this.scrollService.scrollDown){
      this.effect = "fade-down";
    }else if(this.scrollService.scrollUp){
      this.effect = "fade-up";
    }
  }

}
