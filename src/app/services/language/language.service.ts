import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

const supportedLanguages = ["en", "es"] as const;
type Language = (typeof supportedLanguages)[number];
@Injectable({
  providedIn: "root",
})
export class LanguageService {
  language: Language = "en";

  constructor(
    public translateService: TranslateService,
    private location: Location
  ) {}

  initLanguage() {
    const url = this.location.path();

    let language = url.split("/")[1] as Language;

    if (!supportedLanguages.includes(language)) {
      language = "en";
    }

    this.translateService.addLangs(["en", "es"]);
    this.translateService.setDefaultLang(language);

    this.location.go(`/${language}`);

    this.language = language;
  }

  changeLanguage(language: Language) {
    this.translateService.setDefaultLang(language);
    this.location.go(`/${language}`);
    this.language = language;
  }
}
