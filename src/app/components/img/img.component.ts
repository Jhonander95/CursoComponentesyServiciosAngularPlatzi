import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'Valor init'
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZeSJhq4dWlb0IHRZ4H_p0qcBqmVOgJZh7g&usqp=CAU'

  constructor() { }

  ngOnInit(): void {

  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
