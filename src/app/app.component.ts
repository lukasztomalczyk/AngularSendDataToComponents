import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div align="center"><table bgcolor="red">
              <tr>
                <td><p>Nazwa komponentu <b>Parrent</b></p><br>
                  <app-child [messageRecive]="message"></app-child>
                </td>
              </tr>
            </table></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SendDataBetweenComponents';

   message = 'Hello world';
}
