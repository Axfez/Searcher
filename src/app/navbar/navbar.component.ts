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
    'Science',
    'Education',
    'People',
    'Feelings',
    'Computer',
    'Buildings',
  ];
  onSearch(searchTerm: string, category: string) {
    this.search.emit(searchTerm);
    this.categoryPicked.emit(category);
  }
}
