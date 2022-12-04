import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() search = new EventEmitter<string>();
  @Output() categoryPicked = new EventEmitter<string>();

  searchTerm = '';
  category = '';
  categories: string[] = [
    'science',
    'education',
    'people',
    'feelings',
    'computer',
    'buildings',
  ];

  onSearchTerm(searchTerm: string) {
    this.search.emit(searchTerm);
    console.log(searchTerm);
  }
  onSearchCategory(category: string) {
    this.categoryPicked.emit(category);
    console.log(category);
  }
}
