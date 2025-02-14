import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get(key: string) {
    if (this.isBrowser) {
      return JSON.parse(localStorage.getItem(key) || '{}') || {};
    }
    return {};
  }

  set(key: string, value: any): boolean {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  has(key: string): boolean {
    if (this.isBrowser) {
      return !!localStorage.getItem(key);
    }
    return false;
  }

  remove(key: string) {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  clear() {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}