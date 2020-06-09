import { App, ExpressReceiver } from '@slack/bolt';

const signingSecret = process.env.SLACK_SIGNING_SECRET || '';
const token = process.env.SLACK_BOT_TOKEN || '';

export const initBolt = (receiver: ExpressReceiver): App => {
  return new App({ receiver, token });
};

export const initExpress = (processBeforeResponse = false): ExpressReceiver => {
  return new ExpressReceiver({ processBeforeResponse, signingSecret });
};
