import * as Router from "koa-router";

const FilmsRouter = new Router({
    prefix: '/films'
});

FilmsRouter.get('/categories', async (ctx, next) => {
    
});

FilmsRouter.get('/categories/amount', async (ctx, next) => {

});

FilmsRouter.get('/:category', async (ctx, next) => {

});
