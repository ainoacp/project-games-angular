import { CardInterface } from './../../shared/models/memorygame.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treasurehunt-page',
  templateUrl: './treasurehunt-page.component.html',
  styleUrls: ['./treasurehunt-page.component.scss']
})
export class TreasurehuntPageComponent implements OnInit{
  tableBoard: CardInterface[] = [{
    id: 1,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 2,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 3,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 4,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 5,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 6,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 7,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 8,
    name: 'fail',
    img: 'assets/images/treasurehunt-images/skull.png'
  },
  {
    id: 9,
    name: 'treasure',
    img: 'assets/images/treasurehunt-images/chest.png'
  }];
  initialTableBoard?: CardInterface[]; 
  clickedCard?: CardInterface;
  score: number = 0;

  ngOnInit() {
    this.initialTableBoard = JSON.parse(JSON.stringify(this.tableBoard));
    this.tableBoard = this.suffle(this.tableBoard);
  }

  suffle(array:any) {
    return array.sort(() => 0.5 - Math.random())
  }

  checkCard(card: CardInterface) {
    if (this.clickedCard) {
      if (this.clickedCard.name !== card.name){
        card.isClicked = true;
        card.isCorrect = true;
        this.clickedCard.isCorrect = true;
        this.clickedCard.isClicked = true;
        this.score++
      } else {
        card.isClicked = true;
      }
    } else {
      this.clickedCard = card;
      card.isClicked = true;
    } 
  }

  reset() {
    this.score = 0;
    this.tableBoard = this.suffle(this.initialTableBoard)
  }

}
