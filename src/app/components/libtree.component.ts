import { Component, Input } from '@angular/core';


@Component({
  selector: 'lib-tree',
  templateUrl: './libtree.component.html',
  styleUrls: ['./libtree.component.css']
})
export class LibtreeComponent {
  private isShow: boolean = true;

  @Input() libData: any;

  constructor(){
  }

  iconClick(fol: any){
    fol.isTreeOpen = !fol.isTreeOpen;
    console.log('IconClick');
  }

  moveTo(uri: string, flag: boolean) {
    console.log('TitleClick');
  }
}