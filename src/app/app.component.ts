import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template:`
  //   <h1>Test</h1>
  // `,
})
export class AppComponent {

  title = ' "JSYSTEMS" ';
  subtitle = 'test';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.init()
  }

  login() { this.auth.login() }

  logout() { this.auth.logout() }

}
