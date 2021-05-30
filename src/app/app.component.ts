import { Component } from "@angular/core";
import { LanguageService } from "./_services/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  constructor(private lang: LanguageService) {
    console.log("run");
  }
}
