import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = "Abhishek"
  moods = [
    'happy', 'sad', 'calm', 'excited', 'angry'
  ]
  isMoodSelected=false
  selectedMood = ''

  selectMood(mood:string):void {
    this.isMoodSelected = true;
    this.selectedMood = mood;
  }

}
