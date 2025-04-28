import { Component } from '@angular/core';
import {
  faBookOpen,
  faChartLine,
  faRocket,
  faSeedling,
  faUser,
  faRoad,
  faPalette,
  faTheaterMasks,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  faUser = faUser;
  faRocket = faRocket;
  faBookOpen = faBookOpen;
  faSeeding = faSeedling;
  faChartLine = faChartLine;
  faPalette = faPalette;
  faRoad = faRoad;
  faTheaterMasks = faTheaterMasks;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  features = [
    { name: 'Mood Tracking', icon: this.faChartLine },
    { name: 'Personal Growth', icon: this.faSeeding },
    { name: 'Mood Journal', icon: this.faBookOpen },
    { name: 'Paint Your Mood', icon: faPalette },
    { name: 'Journey Within', icon: faRoad },
    { name: 'Feel Your Emotions', icon: faTheaterMasks },
    { name: 'Start Your Journey', icon: this.faRocket },
    { name: 'Know Yourself', icon: this.faUser },
  ];

  socialLinks = [
    {
      link: 'https://x.com/iamabhishek012',
      icon: faTwitter,
    },
    {
      link: 'https://www.linkedin.com/in/iamabhishek01',
      icon: faLinkedin,
    },
    {
      link: 'https://github.com/abhishek-2k23',
      icon: faGithub,
    },
    {
      link: 'https://www.instagram.com/iam_abhishek012/',
      icon: faInstagram,
    },
  ];

  constructor(private router: Router){}

  redirectToURL(url:string){
    window.open(url, '_blank')
  }
}
