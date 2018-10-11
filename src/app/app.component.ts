import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div align="center"><table bgcolor="green">
              <tr>
                <td><p>Nazwa komponentu <b>Parrent</b></p><br>
                  wiadomość: {{message}}
                  <app-child (messageEvent)="receiveMessage($event)"></app-child>
                </td>
              </tr>
            </table></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SendDataBetweenComponents';

  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
