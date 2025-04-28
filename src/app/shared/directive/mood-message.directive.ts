import { Directive } from '@angular/core';

@Directive({
  selector: '[appMoodMessage]',
  standalone: true
})
export class MoodMessageDirective {

  constructor() { }

  moodMessages: any={
    'happy': 'wow, tell me the story. I will also get happy for you',
    'sad':'no, worries this will pass also.',
    'angry':'Anger is valid, but don’t let it control you.',
    'calm':'you are like a dhoni.',
    'excited':'keep your excitement high till the work done.'
}

  getMoodMessages(mood:string){
    if(mood && this.moodMessages[mood]){
      return this.moodMessages[mood];
    }
  }

}
