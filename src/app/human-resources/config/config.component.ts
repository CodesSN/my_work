import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  public data: Employee[] =
  [
    {
      "name": "John Smith",
      "address": "456 Elm Street",
      "phone": "555-987-6543",
      "date": "03/11/1985",
      "email": "johnsmith@example.com",
      "civil": "Single",
      "sn": "987-65-4321"
    },
    {
      "name": "Sarah Johnson",
      "address": "789 Oak Avenue",
      "phone": "555-456-7890",
      "date": "12/07/1992",
      "email": "sarahjohnson@example.com",
      "civil": "Married",
      "sn": "456-78-9012"
    },
    {
      "name": "Robert Brown",
      "address": "321 Maple Street",
      "phone": "555-234-5678",
      "date": "08/22/1980",
      "email": "robertbrown@example.com",
      "civil": "Divorced",
      "sn": "234-56-7890"
    },
    {
      "name": "Jessica Lee",
      "address": "555 Pine Drive",
      "phone": "555-678-1234",
      "date": "05/16/1998",
      "email": "jessicalee@example.com",
      "civil": "Single",
      "sn": "678-90-1234"
    },
    {
      "name": "Michael Davis",
      "address": "888 Cedar Lane",
      "phone": "555-345-6789",
      "date": "09/30/1987",
      "email": "michaeldavis@example.com",
      "civil": "Married",
      "sn": "345-67-8901"
    },
    {
      "name": "David Lee",
      "address": "789 Elm Street",
      "phone": "555-876-5432",
      "date": "02/18/1985",
      "email": "davidlee@example.com",
      "civil": "Married",
      "sn": "456-78-9012"
    },
    {
      "name": "Emily Nguyen",
      "address": "123 Cedar Street",
      "phone": "555-765-4321",
      "date": "11/07/1978",
      "email": "emilynguyen@example.com",
      "civil": "Widowed",
      "sn": "567-89-0123"
    },
    {
      "name": "Joshua Kim",
      "address": "567 Pine Street",
      "phone": "555-543-2109",
      "date": "06/25/1995",
      "email": "joshuakim@example.com",
      "civil": "Divorced",
      "sn": "678-90-1234"
    },
    {
      "name": "Avery Taylor",
      "address": "890 Birch Street",
      "phone": "555-432-1098",
      "date": "09/03/1982",
      "email": "averytaylor@example.com",
      "civil": "Single",
      "sn": "789-01-2345"
    },

  ];
  public displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'options'];
}
