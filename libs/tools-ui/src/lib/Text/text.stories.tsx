import { Story, Meta } from '@storybook/react';
import Text, { Props } from './';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Header1 = Template.bind({});
Header1.args = { kind: 'h1', children: 'This is header 1' };

export const Header2 = Template.bind({});
Header2.args = { kind: 'h2', children: 'This is header 2' };

export const Paragraph = Template.bind({});
Paragraph.args = { kind: 'p', children: 'This is a paragraph' };
