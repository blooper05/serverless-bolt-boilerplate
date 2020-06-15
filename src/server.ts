import { App, ExpressReceiver, Logger } from '@slack/bolt';

const signingSecret = process.env.SLACK_SIGNING_SECRET || '';
const token = process.env.SLACK_BOT_TOKEN || '';

export const initBolt = ({
  express,
  logger,
}: {
  express: ExpressReceiver;
  logger: Logger;
}): App => {
  const receiver = express;
  return new App({ receiver, token, logger });
};

export const initExpress = ({
  isLambda,
  logger,
}: {
  isLambda: boolean;
  logger: Logger;
}): ExpressReceiver => {
  const processBeforeResponse = isLambda;
  return new ExpressReceiver({ processBeforeResponse, signingSecret, logger });
};
