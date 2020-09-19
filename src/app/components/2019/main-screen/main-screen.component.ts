import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {
  @ViewChild('sidenav', { static: true })
  public sidenav: MatSidenav;

  constructor(public media: MediaObserver) { }

  public ngOnInit(): void {
  }

  public displaySidenavMenu(): void {
    this.sidenav.open();
  }

  public logout(): void {
    console.log('Does nothing. HAH! Tricked you.');
  }
}

export default MainScreenComponent;
