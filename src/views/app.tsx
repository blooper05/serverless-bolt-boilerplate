/** @jsx JSXSlack.h */
import { JSXSlack, Blocks, Section, Modal, Divider, Textarea, ChannelsSelect } from '@speee-js/jsx-slack';
import { Block, View } from '@slack/types';

export const helloWorld = ({ userId }: { userId: string }): Block[] => {
  return JSXSlack(
    <Blocks>
      <Section>
        Hi <a href={`@${userId}`}>user</a>! :wave:
      </Section>
    </Blocks>
  );
}

export const sampleModal = ({ userId }: { userId: string }): View => {
  return JSXSlack(
    <Modal title='Sample Modal View' close='Cancel' submit='Submit' callbackId='modal'>
      <Section>
        <p>
          Hi <a href={`@${userId}`}>user</a>! :wave:
        </p>
      </Section>
      <Divider />
      <Textarea label='write something down' placeholder='Lorem Ipsum' required blockId='postBlock' actionId='postAction' />
      <ChannelsSelect label='select the channel' required blockId='channelBlock' actionId='channelAction' />
    </Modal>
  );
}
