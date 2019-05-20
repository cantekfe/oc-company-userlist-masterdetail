import { Component } from '@angular/core';
import { ToolboxComponent } from '../toolbox-decorator';

 @ToolboxComponent({
   desc: 'Company List',
   icon: 'fa fa-chart-bar',
   componentName : 'CompanyContainerComponent'
 })
@Component({
  selector: 'pack-company-list-container',
  templateUrl: './company-container.component.html',
  styleUrls: ['./company-container.component.css']
})
export class CompanyContainerComponent {

  flipped = false;
  flipIt() {
    this.flipped = !this.flipped;
  }
}