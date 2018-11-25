import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataModel } from '../datamodel';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  project:any;
  pictureIndex = 0;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log('parama', params.get('id'));
        return of(DataModel.projects[params.get('id')]);
      })
    ).subscribe(project => this.project = project);
  }

  redirectToHome() {
    this.router.navigate(['']);
  }

  showLeft() {
    this.pictureIndex = (this.pictureIndex + 1) % this.project.screens.length;
  }

  showRight() {
    this.pictureIndex = (this.pictureIndex - 1 + this.project.screens.length) % this.project.screens.length;
  }
}
