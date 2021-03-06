import * as fanControl from "quietcool";
import Koa from "koa";
import Router from "koa-router";
import * as _ from "lodash";
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(logger());
app.use(bodyParser());

const router = new Router();

const port = process.env.PORT || 3001;

router.get("/fans/:ip", async ctx => {
  let ip = ctx.params.ip;
  let fans = await fanControl
    .listFansWithInfo(ip)
    .toArray()
    .toPromise();

  let sorted = _.chain(fans).sortBy(f => f.info.hubid);

  ctx.body = { fans: sorted };
});

const getId = ctx => {
  let { ip, uid } = ctx.params;
  return { ip, uid };
};

router.post("/fans/:ip/:uid/power", async ctx => {
  let id = getId(ctx);
  let { on } = (<any>ctx.request).body;

  let response = await fanControl.power(id, on).toPromise();
  ctx.body = response;
});

router.post("/fans/:ip/:uid/setCurrentSpeed", async ctx => {
  let id = getId(ctx);
  let { speed } = (<any>ctx.request).body;

  let response = await fanControl.setCurrentSpeed(id, speed).toPromise();
  ctx.body = response;
});

router.post("/fans/:ip/:uid/updateSpeeds", async ctx => {
  let id = getId(ctx);
  let { speeds } = (<any>ctx.request).body;

  let response = await fanControl.updateFanSpeeds(id, speeds).toPromise();
  ctx.body = response;
});

app.use(router.routes());
app.listen(port);

console.log(`Server running on port ${port}`);
