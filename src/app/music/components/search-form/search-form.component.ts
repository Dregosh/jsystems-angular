import { Component, EventEmitter, OnInit, Output, placki } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  censor = (badword: string) => //
    (control: AbstractControl): ValidationErrors | null => {
      const hasError = String(control.value).includes(badword)

      return hasError ? {
        'censor': { badword }
      } : null
    }

  asyncCensor = (badword: string) => //
    (control: AbstractControl): Observable<ValidationErrors | null> => {
      const hasError = String(control.value).includes(badword)

      // return this.http.get(..).pipe(map(...))

      return new Observable((observer) => {
        // console.log('Subscribed');

        const handle = setTimeout(() => {
          // console.log('Next');
          observer.next(hasError ? {
            'censor': { badword }
          } : null)
          observer.complete()

        }, 2000)

        /* Destructor - on:Unsubscribe / on:Complete */
        return () => {
          // console.log('Unsubscribe');
          clearTimeout(handle)
        }
      })
    }

  queryForm = new FormGroup({
    'query': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // this.censor('placki')
    ], [
      this.asyncCensor('placki')
    ])
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
      debounceTime(500),
      // Check Type
      filter(isString),

      // length >= 3
      filter(query => query.length >= 3),

      // no duplicates!
      distinctUntilChanged(/* compFn? */),

    ).subscribe(this.search)

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