import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public initComplete: boolean = false;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    const self = this;
    this.initComplete = true;
    this.router.navigate(['/home']);
  }
}
export default AppComponent;
