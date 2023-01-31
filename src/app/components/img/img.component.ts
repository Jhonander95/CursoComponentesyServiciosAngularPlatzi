import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('changes juts img  => ', this.img);

  }
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../assets/images/default.png'
/*   counter = 0;
  counterFn: number | undefined; */

  constructor() {
    //befor render
    //NO async -- once time
    console.log('Constructor', ' imageValue => ', this.img);
  }

  ngOnInit(): void {
    //before render
    //async - fetch - onece time
    console.log('ngOnInit', ' imageValue => ', this.img);
/*     this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('Run Counter');
    }, 1000); */
  }
  ngOnChanges(changes: SimpleChanges) {
    //befor -- during render
    //changes inputs  -- times
    console.log('ngOnChanges', ' imageValue => ', this.img);
    console.log(changes);


  }
  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy', ' imageValue => ', this.img);
   // window.clearInterval(this.counterFn);
  }
  ngAfterViewInit() {
    //after render
    //handler childrend
    console.log('ngAfterViewInit', ' imageValue => ', this.img);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
