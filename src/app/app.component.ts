import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Dojo Mail';

  emails = [
    {email: 'bill@gates.com', important: true, subject: 'New Windows', content: 'Windows XI will launch in the year 2100' },
    {email: 'ada@lovelace.com', important: true, subject: 'Programming', content: 'Enchantress of Numbers'},
    {email: 'john@carmac.com', important: false, subject: 'Updated Algo', content: 'New Algorithim for shadow volumes'},
    {email: 'gabe@newel.com', important: false, subject: 'HL3!', content: "Just kidding..."}
]

  //make a dictionary


}
