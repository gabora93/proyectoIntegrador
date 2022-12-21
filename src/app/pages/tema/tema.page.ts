import { Component } from '@angular/core';
import { ThemeService } from '../../services/tema-service.service';
 
@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage  {
 
  constructor(private theme: ThemeService) {
    this.selectTheme = 'default';
    this.dynamicTheme()
  }
 
  public themeColor = [
    { name: 'Default', class: 'default' },
    { name: 'Dark', class: 'dark-theme' },
    { name: 'Purple', class: 'purple' },
    { name: 'Green', class: 'green' }
  ];
  public selectTheme;
 
  dynamicTheme() {
    this.theme.activeTheme(this.selectTheme);
  }
}
