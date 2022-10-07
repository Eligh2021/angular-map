import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-map';

  onClear()  {
   this.title = '';
  }

  onAdd() {
    this.title = 'iluha.neffor'
  }

  }


