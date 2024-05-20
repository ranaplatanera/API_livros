export interface IBook {
    id: number;
    name: string;
    pages: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
 }
 
 export type TCreateBookBody = Omit<IBook, "id">;
 
 export type TUpdateBookBody = Partial<TCreateBookBody>;