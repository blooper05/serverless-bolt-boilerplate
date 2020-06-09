import { initBolt, initExpress } from './server';
import { initListener } from './app.controller';

const isLambda = false;
const express = initExpress(isLambda);
const bolt = initBolt(express);

(async () => {
  await bolt.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

initListener(bolt);
