import { Component } from '@angular/core';
import { DetailComponent } from '../detail/mail-detail.component';
import { MenuComponent } from '../menu/mail-menu.component';
import { InboxComponent } from '../inbox/mail-inbox.component';

@Component({
  selector: 'app-mail',
  imports: [
    DetailComponent,
    MenuComponent,
    InboxComponent
  ],
  templateUrl: './mail-parent.component.html',
  styleUrl: './mail-parent.component.css'
})
export class MailComponent {

}
