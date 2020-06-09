import { App } from '@slack/bolt';
import { helloWorld } from './app.view';

export const initListener = async (app: App): Promise<void> => {
  app.event('app_mention', async ({ event, say }) => {
    const text = '';
    const name = event.user;
    const blocks = helloWorld({ name });

    await say({ text, blocks });
  });
}
