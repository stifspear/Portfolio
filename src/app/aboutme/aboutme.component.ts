import { Component, OnInit } from '@angular/core';

import { DataModel } from '../datamodel';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  contactDetails: any;
  dataModel: any;
  education: any;
  experiences: any;
  projects: any;
  selectedValues: any;
  skills: any;
  constructor() { }

  ngOnInit() {
    this.contactDetails = DataModel.contactDetails;
    this.dataModel = DataModel;
    this.education = DataModel.education;
    this.experiences = DataModel.experiences;
    this.projects = DataModel.projects;
    this.selectedValues = {
      'exp': this.experiences[0].desc,
      'pro': this.projects[0].desc
    };
    this.skills = DataModel.skills;
  }

  /**
   * Function will update the description based on the selected element
   * @param section name of the element clicked on
   * @param itemElement of the section
   */
  updateValue(obj: string, data: string) {
    this.selectedValues[obj] = data;
  }

  getKeys(obj: Object): Array<any> {
    return Object.keys(obj);
  }

}
