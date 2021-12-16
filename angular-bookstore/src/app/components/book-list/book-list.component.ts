import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
   Books: Book[] = [];

  currentCategoryId: any;
  constructor(private _bookService: BookService,
    private _activatedRoute: ActivatedRoute) {
      this.currentCategoryId = 1;
     }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    })   
  }

  listBooks(){
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    
    if(hasCategoryId){
      this.currentCategoryId = this._activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }
    
    this._bookService.getBooks(this.currentCategoryId).subscribe(
      data => {
        this.Books = data;
      }
    )
  }

}
