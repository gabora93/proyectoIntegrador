import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Walter_White%27s_House.jpg/2560px-Walter_White%27s_House.jpg",
    "https://i.pinimg.com/originals/db/64/6a/db646a69c5780cf8860b6d556a8b695c.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/033/062/399/large/jamie-sheldon-bb-render-01.jpg?1608277999",
    "https://www.breakingbad-locations.com/wp-content/uploads/2014/11/Breaking.Bad_.S05E10.1080p.mkv_001162439.jpg"
    
  ]
}
