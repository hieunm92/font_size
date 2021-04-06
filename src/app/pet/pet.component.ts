import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'Mina';
  petImage = 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/116797445_3565379850213678_7039690562900949950_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1opL6XJgMAoAX9TaYtY&_nc_ht=scontent.fhan4-1.fna&oh=73cd09a45f4dc40e8b1fe316c498c344&oe=60927FA1';

  constructor() {
  }

  // tslint:disable-next-line:typedef
  updateName(name: string) {
    this.petName = name;
  }

  // tslint:disable-next-line:typedef
  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit(): void {
  }
}
