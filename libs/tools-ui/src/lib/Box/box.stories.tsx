import { Sprinkles } from '../css/sprinkles.css';
import { Story, Meta } from '@storybook/react';
import Box from './';

export default {
  component: Box,
  title: 'Box',
} as Meta;

const Template: Story<any> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  display: 'flex',
  flexDirection: 'column',
  children: [<p>Hello</p>, <p>World</p>],
} as Sprinkles;
