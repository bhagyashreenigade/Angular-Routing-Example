import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages = ['Java', 'Python', 'C', 'C++'];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getInfo(selectedLanguage: any) {
    console.log(selectedLanguage);
    this.router.navigate(['/info', {language: selectedLanguage}]);
  }

}
