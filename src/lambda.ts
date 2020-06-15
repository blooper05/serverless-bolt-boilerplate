import { createServer, proxy } from 'aws-serverless-express';
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

import { initBolt, initExpress } from './server';
import { initListener } from './app.controller';
import { appLogger } from './lib/logger';

const isLambda = true;
const logger = appLogger({ type: 'json' });
const express = initExpress({ isLambda, logger });
const bolt = initBolt({ express, logger });

export const handler: APIGatewayProxyHandler = async (
  event,
  context,
): Promise<APIGatewayProxyResult> => {
  const server = createServer(express.app);
  return proxy(server, event, context, 'PROMISE').promise;
};

initListener(bolt);
