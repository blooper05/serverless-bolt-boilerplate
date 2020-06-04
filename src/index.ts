import { App, ExpressReceiver } from '@slack/bolt';

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;
const processBeforeResponse = false;

const receiver = new ExpressReceiver({ signingSecret, processBeforeResponse });
const app = new App({ token, receiver });

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
