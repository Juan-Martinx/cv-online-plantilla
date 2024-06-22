import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Este servicio nos será de utilidad a la hora
 * de que el resto de componentes sepan si se está
 * desplazando hacia abajo o hacia arriba.
 */
export class ScrollService {

  constructor() { }

  scrollUp = false;
  scrollDown = false;

}

