import { Component } from '@angular/core';
import { faHome, faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  faSadTear = faSadTear
  faHome = faHome
}
