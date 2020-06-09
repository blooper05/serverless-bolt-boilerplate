import { App } from '@slack/bolt';
import { helloWorld, modal } from './app.view';

export const initListener = async (app: App): Promise<void> => {
  app.event('app_mention', async ({ event, say }) => {
    const text = '';
    const name = event.user;
    const blocks = helloWorld({ name });

    await say({ text, blocks });
  });

  app.command('/modal', async ({ command, ack, context }) => {
    await ack();

    try {
      const token = context.botToken;
      const triggerId = command.trigger_id;
      const name = command.user_id;
      const view = modal({ name });

      await app.client.views.open({ token, trigger_id: triggerId, view });
    } catch (error) {
      console.error(error);
    }
  });
}
