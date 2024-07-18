import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService{
    public books : Book[] = [] ;

    //add book
    addBookService(book : Book): string{
        book.id=uuidv4();
         this.books.push(book);
         return "book is added...";
    }
   //update book
    updateBookService(book : Book): string{
        let index=this.books.findIndex((currentBook)=>
               {
                   return currentBook.id == book.id;
               })
         this.books[index]=book;
        return "book is updated...";
   }

   //delete book
   deleteBookService(bookId : string): string{
     this.books=this.books.filter((book)=>
            {
               return book.id != bookId;
            })
    return "book is deleted...";
   }

   //get all books
    
   getBookService():Book[]
   {
    return this.books;
   }



        

}