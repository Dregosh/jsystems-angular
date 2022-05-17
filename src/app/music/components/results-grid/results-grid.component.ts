import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/core/model/Search';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.scss']
})
export class ResultsGridComponent implements OnInit {

  @Input() results: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
