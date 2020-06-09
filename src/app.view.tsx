/** @jsx JSXSlack.h */
import { JSXSlack, Blocks, Section } from '@speee-js/jsx-slack';
import { Block } from '@slack/types';

export const helloWorld = ({ name }: { name: string }): Block[] => {
  return JSXSlack(
    <Blocks>
      <Section>
        Hi <a href={`@${name}`}>name</a>! :wave:
      </Section>
    </Blocks>
  );
}
