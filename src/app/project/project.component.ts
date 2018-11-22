import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  clicked() {
    this.router.navigate(['/project-overview'], {
      queryParams: { id: this.project.id }
    });
  }

}
