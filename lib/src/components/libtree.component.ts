import { Component, Input } from '@angular/core';
import { InitData } from '../../assets/dummy/initdata';
import { LibtreeUtil } from '../utils/libtree.util';

@Component({
  selector: 'lib-tree',
  templateUrl: './libtree.component.html',
  styleUrls: ['./libtree.component.css']
})
export class LibtreeComponent {
  isShow: boolean = true;

  @Input() libData: any;
  @Input() selfInvokeFlag: boolean = false;
  constructor(){
  }
  ngOnInit(){
    if(!this.selfInvokeFlag && LibtreeUtil.isNull(this.libData)){
      this.libData = InitData.libData;
    }
  }

  iconClick(fol: any){
    fol.isTreeOpen = !fol.isTreeOpen;
    console.log('IconClick');
  }

  moveTo(uri: string, flag: boolean) {
    console.log('TitleClick');
  }
}