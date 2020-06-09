import { createServer, proxy } from 'aws-serverless-express';
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { initBolt, initExpress } from './server';
import { initListener } from './app.controller';

const isLambda = true;
const express = initExpress({ isLambda });
const bolt = initBolt({ express });

export const handler: APIGatewayProxyHandler = async (event, context): Promise<APIGatewayProxyResult> => {
  const server = createServer(express.app);
  return proxy(server, event, context, 'PROMISE').promise;
};

initListener(bolt);
