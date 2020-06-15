import { initBolt, initExpress } from './server';
import { initListener } from './app.controller';
import { appLogger } from './lib/logger';

const isLambda = false;
const logger = appLogger({ type: 'pretty' });
const express = initExpress({ isLambda, logger });
const bolt = initBolt({ express, logger });

(async () => {
  await bolt.start(process.env.PORT || 3000);
  logger.debug('⚡️ Bolt app is running!');
})();

initListener(bolt);
