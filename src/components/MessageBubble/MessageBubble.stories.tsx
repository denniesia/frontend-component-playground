import type { Meta, StoryObj } from '@storybook/react-vite';

import MessageBubble from './MessageBubble';

const meta: Meta<typeof MessageBubble> = {
  title: 'Components/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
            'A message bubble component that displays a message with optional styling for own messages and timestamps.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MessageBubble>;

export const MyMessage: Story = {
  args: {
    text: 'How much for this?',
  },
};

export const OtherMessage: Story = {
  args: {
    text: 'I would sell it for $20.00.',
    own: false,
  },
};

export const Conversation : Story = {
  args: {
    text: 'This is a very long message that should wrap onto multiple lines to demonstrate the text wrapping functionality of the message bubble component. It should also handle timestamps correctly.',   
    },      
}


export const LongUrl : Story = {
  args: {
    text: 'This is a message with a long URL: https://www.example.com/this-is-a-very-long-url-that-should-wrap-properly-in-the-message-bubble-component-to-test-the-text-wrapping-and-styling-of-the-component',   
    },      
}
