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
    const field = this.queryForm.get('query')!;

    const valueChanges = field.valueChanges

    valueChanges.pipe(
      // length >= 3

      // no duplicates!

      // once in 500ms  ( 400ms - Doherty Treshold )

    )
      .subscribe(console.log)
  }

}


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