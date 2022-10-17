import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier-composant',
  templateUrl: './premier-composant.component.html',
  styleUrls: ['./premier-composant.component.scss']
})
export class PremierComposantComponent implements OnInit {

  public title: string = 'Sophie';
  public nmb = 'Sophie';
  public nom3: string = 'Sophie';

}
