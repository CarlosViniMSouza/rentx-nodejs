import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

import listCategoriesController from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

// This route I created by willingly
categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController().handle(request, response);
});

export { categoriesRoutes };