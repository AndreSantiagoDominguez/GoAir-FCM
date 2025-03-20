import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
