import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchTerm = '';
  category = '';
  categories: string[] = [
    'Science',
    'Education',
    'People',
    'Feelings',
    'Computer',
    'Buildings',
  ];
}
