import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})

export class MenuLateralComponent {

  constructor(private scrollService: ScrollService){}

  isInAction = false;
  lastY?: number; // Para almacenar la posición Y del último toque

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if(!this.isInAction){
      if (event.deltaY < 0) {
        this.scrollService.scrollUp = true;
        this.scrollService.scrollDown = false;
        this.moveUp();
      } else if (event.deltaY > 0) {
        this.scrollService.scrollUp = false;
        this.scrollService.scrollDown = true;
        this.moveDown();
      }
    }
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    // Comparar la posición de toque actual con la anterior para determinar la dirección del desplazamiento
    const touch = event.touches[0];
    const currentY = touch.clientY;

    if (this.lastY !== undefined && !this.isInAction) {
      if (currentY < this.lastY) {
        this.scrollService.scrollUp = true;
        this.scrollService.scrollDown = false;
        this.moveUp();
      } else if (currentY > this.lastY) {
        this.scrollService.scrollUp = false;
        this.scrollService.scrollDown = true;
        this.moveDown();
      }
      this.lastY = currentY;
    }
  }

  moveUp(){
    const pageActive = document.querySelector(".point-activated");
    if (pageActive && pageActive.previousElementSibling) {
      this.isInAction = true;
      const previousElement = pageActive.previousElementSibling as HTMLElement;
      previousElement.click()
      setTimeout(() => this.isInAction = false, 150);
    }
  }

  moveDown(){
    const pageActive = document.querySelector(".point-activated") as HTMLElement;
    if (pageActive && pageActive.nextElementSibling) {
      this.isInAction = true;
      const nextElement = pageActive.nextElementSibling as HTMLElement;
      nextElement.click();
      setTimeout(() => this.isInAction = false, 150);
    }
  }
  
}
