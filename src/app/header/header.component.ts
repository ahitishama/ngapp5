import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

		// menus =[{name:'aboutus'},{name:'services'},{name:'home'},{name:'home'},{name:'home'},{name:'home'},{name:'home'}];

		// aboutus =[{name:'aboutus'},{name:'services'},{name:'home'}];
 name:string;
  constructor(){}
  
  openElements: boolean[] = [];


		menus = [
  {
    name: "services",
        url: "  ",
        target: "_blank",
         active: true,
    },
    {
    name: "aboutus",
        active: true,
        navigationItems: [
            {
              name: "services",
              url: "/"
            },
            {
              name: "career",
              url: "/"
            }
        ]
    },
     { name: "aboutus",
        url: "  ",
        target: "_blank"
    },
    { name: "aboutus",
        url: "  ",
        target: "_blank"
    },
    { name: "aboutus",
        url: "  ",
        target: "_blank"
    },
    { name: "aboutus",
        url: "  ",
        target: "_blank"
    },
    { name: "career",
        active: true,
        navigationItems: [
            {
              name: "services",
              url: "/"
            },
            {
              name: "aboutus",
              url: "/"
            }
        ]
    },
]


  ngOnInit() {
  }

}
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HeaderComponent ],
  bootstrap: [ HeaderComponent ]
})
export class AppModule {}