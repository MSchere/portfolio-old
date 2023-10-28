import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class projectsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  @ViewChild("imgContainer") imgContainer: ElementRef = new ElementRef("");

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
}
