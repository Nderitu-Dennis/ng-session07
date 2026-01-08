import { Component } from '@angular/core';

@Component({
  selector: 'app-first-name-c',
  standalone: false,
  template:`
   <main>
    <h1>2 way binding w form controls</h1>
      Name: <input type="text" [(ngModel)]="firstName"/>
      <h2>Hello {{ firstName }} !</h2>

    </main>
    `,
  styleUrl: './first-name-c.css',
})
export class FirstNameC {
  firstName:string = "kendrick lamar";

}
