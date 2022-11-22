import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.scss']
})
export class BoardComponentComponent implements OnInit {
  backgroundColor: string = "";                                 // 背景顏色
  cardtotalCount: number = 0;
  @Input("cardIndex") cardIndex: number = 0;                        // 本張卡片的序列序號
  @Input("cardId") cardId: number = 0;                              // 本張卡片初始編號

  @Output() updateTotalCount = new EventEmitter<number>();
  @Output() updateRemoveCard = new EventEmitter<number>();
  @Output() clickCardId = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    // this.cardId = this.cardIndex;

  }


  // 更新背景顏色
  setCardColor() {
    if (this.cardIndex % 2 === 0) {
      this.backgroundColor = "blue";
    } else {
      this.backgroundColor = "yellow";
    };
  }

  // 點擊
  addClickCount() {
    this.cardtotalCount += 1;
    this.updateTotalCount.emit(1);
    this.clickCardId.emit(this.cardId);
  }


  // 移除卡片
  removeCard() {
    console.log(this.cardIndex)
    this.updateRemoveCard.emit(this.cardIndex);
  }


}
