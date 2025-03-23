import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TestButton from './TestButton';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof TestButton> = {
  title: 'My Stories/Button',
  component: TestButton,
  argTypes: {
    
    children : { 
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: <h1 style={{backgroundColor: 'red'}}>
          Bold
        </h1>,
        Italic: <i>Italic</i>,
      },

    },
  }
} 

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   children: "Button",
    customBackground: "#4200ff",
    $borderRadius : "30px"
  },
  
};

