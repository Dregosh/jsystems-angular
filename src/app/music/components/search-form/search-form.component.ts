import { Component, EventEmitter, OnInit, Output, placki } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

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
    const field = this.queryForm.get('query')!;

    const valueChanges = field.valueChanges

    valueChanges.pipe(
      filter(isString),

      // length >= 3
      filter(query => query.length >= 3),

      // no duplicates!
      distinctUntilChanged(/* compFn? */),

      // once in 500ms  ( 400ms - Doherty Treshold )
      debounceTime(500)
    )
      .subscribe(console.log)
  }

}

const isString = (query: any): query is string => typeof query === 'string';

// Ambient Type Declarations

declare module '@angular/core' {
  export const placki = 123
}

// Interface Declaration Merging 
declare global {
  interface Window {
    form: FormGroup
  }
}