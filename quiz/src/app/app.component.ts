import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quiz';
  questions: any;
  currentIndex: number;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start = false;
  gameover = false;
  buttonname = 'Start Quiz';
  review = 'any';

  constructor(private route: ActivatedRoute) {
    this.questions = [
      {
        id: 1,
        question: 'Which of the following is an example of an optical disk',
        option: [
          { optionid: 1, name: 'Digital versatile disks' },
          { optionid: 2, name: 'Magnetic disks' },
          { optionid: 3, name: 'Memory disks' },
          { optionid: 4, name: 'Data bus disks' },
        ],
        answer: 1,
        selected: 0,
      },
      {
        id: 2,
        question: 'Select the smallest memory size',
        option: [
          { optionid: 1, name: 'kilobyte' },
          { optionid: 2, name: 'megabyte' },
          { optionid: 3, name: 'gigabyte' },
          { optionid: 4, name: 'terabyte' },
        ],
        answer: 1,
        selected: 0,
      },
      {
        id: 3,
        question: 'What is the full form of IP',
        option: [
          { optionid: 1, name: 'Internet program' },
          { optionid: 2, name: 'Internet protocol' },
          { optionid: 3, name: 'Interface program' },
          { optionid: 4, name: 'Interface protocol' },
        ],
        answer: 2,
        selected: 0,
      },
      {
        id: 4,
        question: 'Which file starts MS Word?',
        option: [
          { optionid: 1, name: 'word.exe ' },
          { optionid: 2, name: 'msword.exe ' },
          { optionid: 3, name: 'word2003.exe ' },
          { optionid: 4, name: 'winword.exe ' },
        ],
        answer: 4,
        selected: 0,
      },
      {
        id: 5,
        question: 'Merge cells option can be applied from?',
        option: [
          { optionid: 1, name: 'Format Cells dialog box Alignment Tab ' },
          { optionid: 2, name: 'Formatting toolbar ' },
          { optionid: 3, name: 'Both of above ' },
          { optionid: 4, name: 'None of above ' },
        ],
        answer: 1,
        selected: 0,
      },
      {
        id: 6,
        question: 'MS-Word is an example of',
        option: [
          { optionid: 1, name: 'An operating system ' },
          { optionid: 2, name: 'A processing device ' },
          { optionid: 3, name: 'Application software ' },
          { optionid: 4, name: 'An input device ' },
        ],
        answer: 3,
        selected: 0,
      },
      {
        id: 7,
        question: 'Ctrl, Shift and Alt are called',
        option: [
          { optionid: 1, name: 'modifier' },
          { optionid: 2, name: 'function' },
          { optionid: 3, name: 'alphanumeric' },
          { optionid: 4, name: 'adjustment' },
        ],
        answer: 1,
        selected: 0,
      },
      {
        id: 8,
        question: 'A computer cannot "boot" if it does not have the',
        option: [
          { optionid: 1, name: 'Compiler ' },
          { optionid: 2, name: 'Loader' },
          { optionid: 3, name: 'Operating system' },
          { optionid: 4, name: 'Assembler' },
        ],
        answer: 3,
        selected: 0,
      },
      {
        id: 9,
        question: 'Junk e-mail is also called',
        option: [
          { optionid: 1, name: 'Spam ' },
          { optionid: 2, name: 'Spoof' },
          { optionid: 3, name: 'Sniffer script' },
          { optionid: 4, name: 'Spool' },
        ],
        answer: 1,
        selected: 0,
      },
      {
        id: 10,
        question: 'Microsoft Office is an example of a',
        option: [
          { optionid: 1, name: 'Closed source software' },
          { optionid: 2, name: 'Open source software' },
          { optionid: 3, name: 'Horizontal market software' },
          { optionid: 4, name: 'vertical market software' },
        ],
        answer: 3,
        selected: 0,
      },
    ];

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }
  ngOnInit(): void {
    this.route.queryParams = this.questions.id;
  }

  next() {
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  submit() {
    this.buttonname = 'Replay';
    if (this.currentIndex + 1 == this.questions.length) {
      this.gameover = true;
      this.start = false;
      this.correct = 0;
      this.notAttempted = 0;
      this.questions.map((x) => {
        if (x.selected != 0) {
          if (x.selected == x.answer) this.correct = this.correct + 1;
        } else {
          this.notAttempted = this.notAttempted + 1;
        }
        x.selected = 0;
      });
    }
  }
  startQuiz() {
    this.gameover = false;
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.start = true;
  }
}
