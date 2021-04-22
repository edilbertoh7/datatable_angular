import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  data:any[]=[];


  ngOnInit(){


  }

 public data1 = [
    {id: 1, title: 'Hydrogen', body: 1.0079, symbol: 'H'},
  {id: 2, title: 'Helium', body: 4.0026, symbol: 'He'},
  {id: 3, title: 'Lithium', body: 6.941, symbol: 'Li'},
  {id: 4, title: 'Beryllium', body: 9.0122, symbol: 'Be'},
  {id: 5, title: 'Boron', body: 10.811, symbol: 'B'},
  {id: 6, title: 'Carbon', body: 12.0107, symbol: 'C'},
  {id: 7, title: 'Nitrogen', body: 14.0067, symbol: 'N'},
  {id: 8, title: 'Oxygen', body: 15.9994, symbol: 'O'},
  {id: 9, title: 'Fluorine', body: 18.9984, symbol: 'F'},
  {id: 10, title: 'Neon', body: 20.1797, symbol: 'Ne'},
  {id: 11, title: 'Sodium', body: 22.9897, symbol: 'Na'},
  {id: 12, title: 'Magnesium', body: 24.305, symbol: 'Mg'},
  {id: 13, title: 'Aluminum', body: 26.9815, symbol: 'Al'},
  {id: 14, title: 'Silicon', body: 28.0855, symbol: 'Si'},
  {id: 15, title: 'Phosphorus', body: 30.9738, symbol: 'P'},
  {id: 16, title: 'Sulfur', body: 32.065, symbol: 'S'},
  {id: 17, title: 'Chlorine', body: 35.453, symbol: 'Cl'},
  {id: 18, title: 'Argon', body: 39.948, symbol: 'Ar'},
  {id: 19, title: 'Potassium', body: 39.0983, symbol: 'K'},
  {id: 20, title: 'Calcium', body: 40.078, symbol: 'Ca'},
  ];


//dtOptions: any = {};
constructor(private http: HttpClient) {

console.log(this.data);console.log('ok');
this.getdata();

 }

getdata(){
  this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe((posts:[]) => {
        this.data = posts;
        console.log(this.data);

    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}


}
