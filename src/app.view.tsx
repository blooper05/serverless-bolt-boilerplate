/** @jsx JSXSlack.h */
import { JSXSlack, Blocks, Section } from '@speee-js/jsx-slack';

export const helloWorld = ({ name }: { name: string }): any => {
  return JSXSlack(
    <Blocks>
      <Section>
        Hi <a href={`@${name}`}>name</a>! :wave:
      </Section>
    </Blocks>
  );
}
