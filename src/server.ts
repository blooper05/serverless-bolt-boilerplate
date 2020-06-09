import { App, ExpressReceiver } from '@slack/bolt';

const signingSecret = process.env.SLACK_SIGNING_SECRET || '';
const token = process.env.SLACK_BOT_TOKEN || '';

export const initBolt = ({ express }: { express: ExpressReceiver }): App => {
  const receiver = express;
  return new App({ receiver, token });
};

export const initExpress = ({ isLambda }: { isLambda: boolean }): ExpressReceiver => {
  const processBeforeResponse = isLambda;
  return new ExpressReceiver({ processBeforeResponse, signingSecret });
};
