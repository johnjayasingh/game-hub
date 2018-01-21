import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gaming Hub';
  search: string = "";
  suggestion: string = "";
  games: any[] = [];
  filteredGames: any[] = [];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getGames().subscribe((res: any[]) => {
      res.shift();
      this.games = res;
      this.filteredGames = this.games.concat([]);
    }, (err) => {
      alert("Failed to reach server");
    })
  }
  onKeyPress() {
    if (this.search.length == 0) {
      this.suggestion = "";
    } else {
      this.filteredGames = this.games.filter(obj => {
        return obj.title.startsWith(this.search);
      });
      if (this.filteredGames.length)
        this.suggestion = this.filteredGames[0].title || "";
    }
  }
}
