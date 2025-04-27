import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgClass],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  faArrowRight = faArrowRight
  faUser = faUser
  faRocket = faRocket
  faBookOpen = faBookOpen
  faSeeding = faSeedling
  faChartLine = faChartLine

  features = [
    { name: 'Mood Tracking', icon: this.faChartLine },
    { name: 'Personal Growth', icon: this.faSeeding },
    { name: 'Mood Journal', icon: this.faBookOpen },
    { name: 'Start Your Journey', icon: this.faRocket },
    { name: 'Know Yourself', icon: this.faUser },
  ];

  
  
}
