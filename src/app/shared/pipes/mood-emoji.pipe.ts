import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodEmoji',
  standalone: true
})
export class MoodEmojiPipe implements PipeTransform {

  transform(value: string): string {
    const emojiMap: any ={
      happy: '😊',
      sad: '😢',
      excited: '😃',
      angry: '😠',
      calm: '😌',
    }

    return emojiMap[value] || '' ;
  }

}
