import { App, ExpressReceiver } from '@slack/bolt';
import { createServer, proxy } from 'aws-serverless-express';

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  processBeforeResponse: true,
});

const app = new App({
  receiver: expressReceiver,
  token: process.env.SLACK_BOT_TOKEN,
  processBeforeResponse: true,
});

const server = createServer(expressReceiver.app);

module.exports.handler = async (event, context) => {
  return proxy(server, event, context, 'PROMISE').promise;
};
