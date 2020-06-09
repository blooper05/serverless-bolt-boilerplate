/** @jsx JSXSlack.h */
import { JSXSlack, Blocks, Section, Modal, Divider, Textarea, ChannelsSelect } from '@speee-js/jsx-slack';
import { Block, View } from '@slack/types';

export const helloWorld = ({ name }: { name: string }): Block[] => {
  return JSXSlack(
    <Blocks>
      <Section>
        Hi <a href={`@${name}`}>name</a>! :wave:
      </Section>
    </Blocks>
  );
}

export const modal = ({ name }: { name: string }): View => {
  return JSXSlack(
    <Modal title='Sample Modal View' close='Cancel' submit='Submit' callbackId='modal'>
      <Section>
        <p>
          Hi <a href={`@${name}`}>name</a>! :wave:
        </p>
      </Section>
      <Divider />
      <Textarea label='write something down' placeholder='Lorem Ipsum' required blockId='postBlock' actionId='postAction' />
      <ChannelsSelect label='select the channel' required blockId='channelBlock' actionId='channelAction' />
    </Modal>
  );
}
