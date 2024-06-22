import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent implements OnInit{

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
