import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { PreloaderService, SettingsService } from '@core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit, AfterViewInit {

  private readonly preloader = inject(PreloaderService);
  private readonly settings = inject(SettingsService);

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    this.settings.setDirection();
    this.settings.setTheme();
    this.preloaderService.hide();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
