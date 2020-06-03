import { App, ExpressReceiver } from '@slack/bolt';

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  receiver: expressReceiver,
  token: process.env.SLACK_BOT_TOKEN,
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
