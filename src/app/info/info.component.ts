import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  selectedLanguage: string;
  information: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedLanguage = this.route.snapshot.paramMap.get("language");
    this.getInformation();
  }

  getInformation() {
    if("Java" == this.selectedLanguage) {
      this.information = "Designed by James Gosling, Java is a class based object oriented programming language."
    } else if("Python" == this.selectedLanguage) {
      this.information = "Python is an interpreted, high-level and general-purpose programming language.";
    } else if("C" == this.selectedLanguage) {
      this.information = "Designed by Dennis Ritchie, C is a general-purpose, procedural computer programming language.";
    } else if("C++" == this.selectedLanguage) {
      this.information = "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.";
    } else {
      this.information = "Incorrect selection or no information found for selected language."
    }
  }

}
