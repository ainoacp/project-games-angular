import { CardInterface } from './../../shared/models/memorygame.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whackamole-page',
  templateUrl: './whackamole-page.component.html',
  styleUrls: ['./whackamole-page.component.scss']
})
export class WhackamolePageComponent implements OnInit{

  tableBoard: CardInterface[] = [{
    id: 1,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 2,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 3,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 4,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 5,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 6,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 7,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 8,
    name: 'fail',
    img: 'assets/images/whackamole-images/bg.jpg'
  },
  {
    id: 9,
    name: 'mole',
    img: 'assets/images/whackamole-images/mole.png'
  }];
  clickedCard?: CardInterface;
  score: number = 0;
  started:boolean = false;
  interval:any;

  ngOnInit() {
    
  }

  start() {
    this.started = true;
    if (this.score <= 0){
      this.interval = setInterval(() => {
        this.tableBoard = this.suffle(this.tableBoard);
      }, 800);
    }
  }

  stop() {
    this.started = false;
      clearInterval(this.interval)
  }

  suffle(array:any) {
      return array.sort(() => 0.5 - Math.random())
  }

  hunt(card: CardInterface) {
    this.clickedCard = card;
        if(this.clickedCard.name === 'mole' && this.started){
          this.clickedCard.isCorrect = true;
          this.score++
          this.tableBoard = this.suffle(this.tableBoard);
          this.score == 10 && this.stop()
        }
  }

  reset() {
    this.score = 0;
    this.tableBoard = this.suffle(this.tableBoard)
  }

}