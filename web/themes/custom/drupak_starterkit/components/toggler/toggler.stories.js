// toggler.stories.js
import Toggler from './toggler.twig'; // Path to your Twig component

export default {
  title: 'Toggler',
  component: Toggler,
  argTypes: {
    linkText: { 
      control: 'text',
      description: 'Text to click on.',
      defaultValue: 'Click me'
    },
    content: {
      control: 'text',
      description: 'Content of the toggle button.',
      defaultValue: 'This is the hidden content.'
    }
  },
};

const Template = ({ linkText, content }) => Toggler({ linkText, content });

export const Default = Template.bind({});
Default.args = {
  linkText: 'Show More',
  content: '<p>This is the toggled content!</p>',
};