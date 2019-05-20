import { Component, Input } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { CompanyService } from "../services/company.service";

type PaneType = "left" | "right";

@Component({
  selector: "company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.css"],
  animations: [
    trigger("slide", [
      state("left", style({ transform: "translateX(0)" })),
      state("right", style({ transform: "translateX(-50%)" })),
      transition("* => *", animate(300))
    ])
  ]
})
export class CompanyListComponent {
  @Input() activePane: PaneType = "left";

  isCompanySelected = false;
  companies = [];
  selectedCompany: any;
  backtothelist = true;
  constructor(private _compService: CompanyService) {}

  slideViews() {
    console.log("this.activePane: ", this.activePane);
    this.activePane = this.activePane === "left" ? "right" : "left";
  }
  onSelection(company: any) {
    this.slideViews();
    this.isCompanySelected = true;
    this.selectedCompany = company;
  }

  ngOnInit() {
    this._compService.getCompanies().subscribe(result => {
      this.companies = result;
    });
  }

  onReturnToList(count) {
    this.slideViews();
    this.isCompanySelected = false;
  }
}
