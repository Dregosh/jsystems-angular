import { Component, EventEmitter, OnInit, Output, placki } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm = new FormGroup({
    'query': new FormControl('batman', [])
  })

  @Output() search = new EventEmitter<string>();

  constructor() {

    // (window as any).form = this.queryForm
    window.form = this.queryForm
  }

  submit() {
    const query = this.queryForm.value['query']
    this.search.emit(query)
  }

  ngOnInit(): void {

  }

}


// Ambient Type Declarations

declare module '@angular/core'{
  export const placki = 123
}

// Interface Declaration Merging 
declare global {
  interface Window {
    form: FormGroup
  }
}