import { Story, Meta } from '@storybook/react';
import Button, { Props } from './';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { kind: 'primary', children: 'This is my button' };

export const Secondary = Template.bind({});
Secondary.args = { kind: 'secondary', children: 'This is my button' };
