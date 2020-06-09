import { createServer, proxy } from 'aws-serverless-express';
import { initBolt, initExpress } from './app';
import { initListener } from './app.controller';

const isLambda = true;
const express = initExpress(isLambda);
const app = initBolt(express);

module.exports.handler = async (event, context) => {
  const server = createServer(express.app);
  return proxy(server, event, context, 'PROMISE').promise;
};

initListener(app);
