import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { fn } from '@storybook/test';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Button> = {
  title: 'Code88/PS3838/Button',
  component: Button,
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
  },
  args: { onClick: fn() },
} 

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   children: "Button",
    customBackground: "#4200ff",
    $borderRadius : "30px",
    onClick : () => alert("Button Clicked")
},

  
};

