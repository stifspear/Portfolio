import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DataModel } from '../datamodel';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  project: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of(DataModel.projects[params.get('id')]);
      })
    ).subscribe(project => this.project = project);
  }
}
