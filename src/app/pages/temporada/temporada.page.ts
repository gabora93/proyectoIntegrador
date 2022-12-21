import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.page.html',
  styleUrls: ['./temporada.page.scss'],
})
export class TemporadaPage implements OnInit {

  poster:any = "";
  season:any = "";
  syno:any = "";

  constructor(private route : ActivatedRoute, private router : Router){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      let poster = params.get('poster');
      this.poster = poster
      let post = params.get('season');
      this.season = Number(post);
      this.syno = params.get('syno');
   });
   
  }

}
