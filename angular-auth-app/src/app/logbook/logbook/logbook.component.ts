import { Component } from '@angular/core';
import {ContactTableComponent} from '../contact-table/contact-table.component'; 
@Component({
  selector: 'app-logbook',
  imports: [ContactTableComponent],
  templateUrl: './logbook.component.html',
  styleUrl: './logbook.component.css'
})
export class LogbookComponent {

}
