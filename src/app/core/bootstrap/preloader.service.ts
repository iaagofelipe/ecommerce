import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  private readonly document = inject(DOCUMENT);

  private readonly selector = 'globalLoader';

  private getElement() {
    return this.document.getElementById(this.selector);
  }

  hide() {
    const el = this.getElement();
    if (el) {
      el.classList.add('global-loader-fade-out');

      el.addEventListener('transitionend', () => {
        el.remove(); // Remove do DOM após o fade-out
      }, { once: true });
    }
  }
}
