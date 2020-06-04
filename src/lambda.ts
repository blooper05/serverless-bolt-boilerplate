import { App, ExpressReceiver } from '@slack/bolt';
import { createServer, proxy } from 'aws-serverless-express';

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;
const processBeforeResponse = true;

const receiver = new ExpressReceiver({ signingSecret, processBeforeResponse });
const app = new App({ token, receiver });

module.exports.handler = async (event, context) => {
  const server = createServer(receiver.app);
  return proxy(server, event, context, 'PROMISE').promise;
};
