import * as Router from "koa-router";
import {FilmsService} from "./films.service";

const filmsService = new FilmsService();
const FilmsRouter = new Router({
    prefix: '/films'
});

FilmsRouter.get('/categories', async (ctx, next) => {
    const categories = await filmsService.getAllCategories();
    ctx.body = categories;
});

FilmsRouter.get('/categories/amount', async (ctx, next) => {
    const categoriesAmount = await filmsService.getAllCategoriesLength();
    ctx.body = categoriesAmount;
});

FilmsRouter.get('/:category', async (ctx, next) => {
    const films = await filmsService.getFilmsByCategory(ctx.params.category);
    ctx.body = films;
});

export default FilmsRouter;