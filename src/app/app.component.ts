import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'i18n-demo';

  siteLanguage: string | undefined = 'English';

  siteLocale!: string;

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'esp', label: 'Español'},
    {code: 'fr', label: 'Français'},
  ];

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale)?.label;
  }
}
