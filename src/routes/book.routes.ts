import { Router } from "express";
import { BookControllers } from "../controllers/book.controllers";
import { IsBookIdValid } from "../middleware/IsBookIdValid.middleware";
import { IsBookNameValid } from "../middleware/IsBookNameValid.middleware";

export const bookRoutes = Router();

const bookControllers = new BookControllers();

bookRoutes.get("/", bookControllers.getBooks);

bookRoutes.get("/:id", IsBookIdValid.execute, bookControllers.getOneBook);

bookRoutes.post("/", IsBookNameValid.execute, bookControllers.create);

bookRoutes.patch("/:id", IsBookNameValid.execute, IsBookIdValid.execute, bookControllers.update);

bookRoutes.delete("/:id", IsBookIdValid.execute, bookControllers.delete);