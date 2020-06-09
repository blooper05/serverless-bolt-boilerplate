import { App } from '@slack/bolt';

export const initListener = async (app: App): Promise<void> => {
  app.event('app_mention', async ({ event, say }) => {
    await say({
      text: '',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hi! <@${event.user}> :wave:`,
          },
        },
      ],
    });
  });
}
