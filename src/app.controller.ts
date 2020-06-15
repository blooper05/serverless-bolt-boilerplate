import { App } from '@slack/bolt';
import { helloWorld, sampleModal } from './views/app';

export const initListener = async (app: App): Promise<void> => {
  app.event('app_mention', async ({ event, say }) => {
    const text = '';
    const userId = event.user;
    const blocks = helloWorld({ userId });

    await say({ text, blocks });
  });

  app.command('/modal', async ({ command, ack, context, logger }) => {
    await ack();

    try {
      const token = context.botToken;
      const { trigger_id } = command; // eslint-disable-line @typescript-eslint/naming-convention
      const userId = command.user_id;
      const view = sampleModal({ userId });

      await app.client.views.open({ token, trigger_id, view });
    } catch (error) {
      logger.error(error);
    }
  });

  app.view('modal', async ({ view, ack, context, body, logger }) => {
    await ack();

    try {
      const token = context.botToken;
      const channel =
        view.state.values.channelBlock.channelAction.selected_channel;
      const text = view.state.values.postBlock.postAction.value;
      const user = body.user.id;

      await app.client.chat.postEphemeral({ token, channel, text, user });
    } catch (error) {
      logger.error(error);
    }
  });
};
