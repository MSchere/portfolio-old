import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import * as AOS from "aos";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "portfolio";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle("Manuel R. Schere | Portfolio");

    this.metaService.addTags([
      {
        name: "keywords",
        content: "full-stack, blockchain, software, developer",
      },
      {
        name: "description",
        content:
          "Con 4 años de experiencia desarrollando sistemas, interfaces, bots y soluciones tecnológicas  para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar código limpio, reutilizable y escalable.",
      },
    ]);

    AOS.init();
  }
}
