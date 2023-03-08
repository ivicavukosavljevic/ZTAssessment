import { Component, ViewChild } from '@angular/core';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ZTAssessment';
  screen=1;
  @ViewChild(AdminHoverCardComponent) adminPanel!: AdminHoverCardComponent;

  openBurgerMenu() {
    this.adminPanel.open = !this.adminPanel.open;
  }
}
