import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { UserService } from '../../service/user/user.service';
import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { MoodMessageDirective } from '../../shared/directive/mood-message.directive';
import { MoodEmojiPipe } from '../../shared/pipes/mood-emoji.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, LandingpageComponent, MoodEmojiPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userName: string | null = '';
  isLoggedIn = false;
  moods = ['happy', 'sad', 'calm', 'excited', 'angry'];

  isMoodSelected = false;
  selectedMood = '';
  moodMessage = '';
  isMoodMessage = false;

  constructor(private userservice: UserService) {}

  ngOnInit(){
    this.userservice.user$.subscribe((userName) => {
      this.userName = userName;
    })
  }
  
  selectMood(mood: string): void {
    this.isMoodSelected = true;
    this.selectedMood = mood;

    //using directive
    const moodMessageDirective = new MoodMessageDirective();
    this.moodMessage = moodMessageDirective.getMoodMessages(mood);
    if (this.moodMessage) {
      this.isMoodMessage = true;
    }
  }

  getUserName() {
    this.userName = this.userservice.getUserName();
  }
}
