import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logbook } from '../../models/logbook.model';
import { Logbookservice } from '../../logbook/logbook.service.api'; 

@Component({
  selector: 'app-contact-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent implements OnInit {

  
  logbookEntries = signal<Logbook[]>([]);

  constructor(private logbookservice: Logbookservice) {}

  ngOnInit(): void {
   
    this.logbookservice.getContact().subscribe(entries => {
      this.logbookEntries.set(entries);
    });
  }

  deleteEntry(entry: Logbook): void {
   
    this.logbookEntries.set(
      this.logbookEntries().filter(e => e._id !== entry._id)
    );
    
  
    this.logbookservice.deleteEntry(entry._id).subscribe();
  }
}
