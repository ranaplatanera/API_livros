import { booksDatabase, generateId } from "../database/database";
import { IBook, TCreateBookBody, TUpdateBookBody } from "../interfaces/book.interface";


export class BookService {
    getBooks(search?: string ): IBook[] {
        if (search) {
            const filteredBooks = booksDatabase.filter((book)=>
                book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
            return filteredBooks;
        } else {
            return booksDatabase;
        }
    }

    getOneBook(book: IBook): IBook {
        return book;
    }

    create(body: TCreateBookBody): IBook {
        const now = new Date();

        const newBook: IBook = {
            id: generateId(),
            name: body.name,
            pages: body.pages,
            category: body.category,
            createdAt: now,
            updatedAt: now
        };
    
        booksDatabase.push(newBook);

        return newBook;
    }

    update (currentBook: IBook, body: TUpdateBookBody): IBook {
        const now = new Date();

        const updatedBook = {...currentBook, ...body, updatedAt: now};
        
        const index = booksDatabase.findIndex((book)=>book.id === currentBook.id);

        booksDatabase.splice(index, 1, updatedBook);

        return updatedBook;
    }

    delete (id: number): void {
        const index = booksDatabase.findIndex((book)=>book.id === id);

        booksDatabase.splice(index,1);
    }
}