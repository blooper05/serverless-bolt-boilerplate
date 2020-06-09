import { initBolt, initExpress } from './app';
import { initListener } from './app.controller';

const isLambda = false;
const express = initExpress(isLambda);
const app = initBolt(express);

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

initListener(app);
