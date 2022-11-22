import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentClickId: number = 0;
  totalCount: number = 0;
  cardList: number[] = [];
  addCardCount: number = 0;



  // 增加卡片
  addCard() {
    this.addCardCount += 1;
    this.cardList.push(this.addCardCount);
    console.log('addCardCount', this.addCardCount, this.cardList);
  }

  // 重置卡片
  reset() {
    this.cardList = [];
    this.totalCount = 0;
    this.addCardCount = 0;

  }

  updateCurrentClickId(currentClickId: number) {
    this.currentClickId = currentClickId
  }

  // 更新累積點擊次數
  updateTotalCount() {
    this.totalCount += 1;
  }


  // 移除卡片
  updateRemoveCard(cardIndex: number) {
    console.log(cardIndex, this.cardList)
    this.cardList.splice(cardIndex, 1);

  }

}
