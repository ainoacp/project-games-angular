import { CardInterface } from './../../shared/models/memorygame.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorygame-page',
  templateUrl: './memorygame-page.component.html',
  styleUrls: ['./memorygame-page.component.scss']
})
export class MemorygamePageComponent implements OnInit{
  cardList: CardInterface [] = [{
    id: 1,
    name: 'earth',
    img: 'assets/images/memorygame-images/earth.svg'
  },
  {
    id: 2,
    name: 'jupiter',
    img: 'assets/images/memorygame-images/jupiter.svg'
  },
  {
    id: 3,
    name: 'mars',
    img: 'assets/images/memorygame-images/mars.svg'
  },
  {
    id: 4,
    name: 'mercury',
    img: 'assets/images/memorygame-images/mercury.svg'
  },
  {
    id: 5,
    name: 'saturn',
    img: 'assets/images/memorygame-images/saturn.svg'
  },
  {
    id: 6,
    name: 'uranus',
    img: 'assets/images/memorygame-images/uranus.svg'
  },
  {
    id: 7,
    name: 'earth',
    img: 'assets/images/memorygame-images/earth.svg'
  },
  {
    id: 8,
    name: 'jupiter',
    img: 'assets/images/memorygame-images/jupiter.svg'
  },
  {
    id: 9,
    name: 'mars',
    img: 'assets/images/memorygame-images/mars.svg'
  },
  {
    id: 10,
    name: 'mercury',
    img: 'assets/images/memorygame-images/mercury.svg'
  },
  {
    id: 11,
    name: 'saturn',
    img: 'assets/images/memorygame-images/saturn.svg'
  },
  {
    id: 12,
    name: 'uranus',
    img: 'assets/images/memorygame-images/uranus.svg'
  }];
  initialCardList?: CardInterface[];
  clickedCard?: CardInterface | null;
  score: number = 0;
  
  ngOnInit() {
    this.initialCardList = JSON.parse(JSON.stringify(this.cardList));
    this.cardList = this.suffle(this.cardList);
  }

  suffle(array:any) {
    return array.sort(() => 0.5 - Math.random())
  }

  checkCard(card: CardInterface) {
    if (this.clickedCard) {
      if (this.clickedCard.name === card.name){
        card.isCorrect = true;
        this.clickedCard.isCorrect = true;
        this.clickedCard.isClicked = false;
        this.clickedCard = null;
        this.score++
      } else {
        card.isClicked = true;
        setTimeout(() => {
          card.isClicked = false;
          this.clickedCard!.isClicked = false;
          this.clickedCard = null;
        }, 500)
      }
    } else {
      this.clickedCard = card;
      card.isClicked = true;
    } 
  }

  reset() {
    this.score = 0;
    this.cardList = this.suffle(this.initialCardList)
  }
  
}
