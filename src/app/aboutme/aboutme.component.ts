import { Component, OnInit } from '@angular/core';

import { DataModel } from '../datamodel';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  dataObj: any;
  selectedValues: any;
  constructor() { }

  ngOnInit() {
    this.dataObj = DataModel.data;
    console.log(this.dataObj);
    this.selectedValues = {
      'experiences': this.getKeys(this.dataObj['experiences'])[0],
      'projects': this.getKeys(this.dataObj['projects'])[0]
    };
  }

  /**
   * Function will update the description based on the selected element
   * @param section name of the element clicked on
   * @param itemElement of the section
   */
  updateDesc(index: number, itemElement: string) {
    this.selectedValues[index] = itemElement;
  }

  getKeys(obj: Object): Array<any> {
    return Object.keys(obj);
  }

}
