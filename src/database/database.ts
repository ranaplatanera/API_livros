import { IBook } from "../interfaces/book.interface"; 

export let id = 0;

export const booksDatabase: IBook[] = [];

export const generateId = () => {
    id++;
    return id;
}