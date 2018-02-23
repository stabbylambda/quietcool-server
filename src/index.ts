import * as fanControl from 'quietcool';
import Koa from 'koa';
import Router from 'koa-router';
import * as _ from 'lodash';
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')

const app = new Koa();
app.use(logger());
app.use(bodyParser());

const router = new Router();

const port = process.env.PORT || 3001;

router.get('/fans/:ip', async (ctx) => {
    let ip = ctx.params.ip
    let fans = await fanControl.listFansWithInfo(ip).toArray().toPromise();

    let sorted = _.chain(fans).sortBy(f => f.info.hubid);

    ctx.body = { fans: sorted };
});

const getId = (ctx) => {
    let ip = ctx.params.ip;
    let uid = ctx.params.uid;
    return {ip, uid};
}

router.post('/fans/:ip/:uid/on', async (ctx) => {
    let id = getId(ctx);
    let response = await fanControl.turnFanOn(id).toPromise();
    ctx.body = response;
});

router.post('/fans/:ip/:uid/off', async (ctx) => {
    let id = getId(ctx);
    let response = await fanControl.turnFanOff(id).toPromise();
    ctx.body = response;
});

router.post('/fans/:ip/:uid/setCurrentSpeed', async (ctx) => {
    let id = getId(ctx);
    let speed = ctx.request.body.speed;

    let response = await fanControl.setCurrentSpeed(id, speed).toPromise();
    ctx.body = response;
});

router.post('/fans/:ip/:uid/updateSpeeds', async (ctx) => {
    let id = getId(ctx);
    let speeds = ctx.request.body.speeds;

    let response = await fanControl.updateFanSpeeds(id, speeds).toPromise();
    ctx.body = response;
});

app.use(router.routes());
app.listen(port);

console.log(`Server running on port ${port}`);
