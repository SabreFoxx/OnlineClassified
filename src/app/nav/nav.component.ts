import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'nav[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  @ViewChild('burger') burger: ElementRef;
  @ViewChild('navList') navList: ElementRef;

  constructor() { }

  menuClicked(): void {
    this.burger.nativeElement.classList.toggle('burger--active');
    this.navList.nativeElement.classList.toggle('nav__list--active');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

}
