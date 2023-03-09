import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  step: string = 'step1';
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigate(url: string, step: string) {
    this.router.navigate([url]);
    this.step = step;
  }
}
