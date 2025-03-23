import { StoryObj, Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  args: {
    isChecked: false,
    label: 'Try Me!',
  },
  render: function Render(args) {
    const [{ isChecked }, updateArgs] = useArgs();
    
    function onChange() {
      updateArgs({ isChecked: !isChecked });
    }
    
    return <Checkbox {...args} onChange={onChange} isChecked={isChecked} />;
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    label: 'Checked Checkbox',
  },
  render: function Render(args) {
    const [{ isChecked }, updateArgs] = useArgs();
    
    function onChange() {
      updateArgs({ isChecked: !isChecked });
     
    }
    
    return <Checkbox {...args} onChange={onChange} isChecked={isChecked} />;
  },
};

export const Disabled: Story = {
  args: {
    isChecked: false,
    label: 'Disabled Checkbox',
    disabled: true,
  },
  render: function Render(args) {
    const [{ isChecked }, updateArgs] = useArgs();
    
    function onChange() {
      updateArgs({ isChecked: !isChecked });
    }
    
    return <Checkbox {...args} onChange={onChange} isChecked={isChecked} />;
  },
};