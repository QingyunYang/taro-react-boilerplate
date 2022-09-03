import { Button as TaroifyButton } from '@taroify/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Taroify/Button',
  component: TaroifyButton,
  argTypes: {
    size: {
      name: 'size',
      control: { type: 'radio' },
      options: ['mini', 'small', 'medium', 'large'],
      description: '尺寸',
      defaultValue: 'medium',
    },
    block: {
      name: 'block',
      control: { type: 'boolean' },
      description: '是否为块级元素',
      defaultValue: false,
    },
    color: {
      name: 'color',
      control: { type: 'radio' },
      options: ['default', 'primary', 'info', 'success', 'warning', 'danger'],
      description: '按钮颜色',
      defaultValue: 'default',
    },
    shape: {
      name: 'shape',
      control: { type: 'radio' },
      options: ['circle', 'round', 'square'],
      description: '按钮形状',
      defaultValue: 'square',
    },
    variant: {
      name: 'variant',
      control: { type: 'radio' },
      options: ['contained', 'text', 'outlined'],
      description: '按钮变种',
      defaultValue: 'contained',
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      description: '是否禁用按钮',
      defaultValue: false,
    },
    children: {
      name: 'children',
      control: { type: 'text' },
      description: '按钮文字	',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof TaroifyButton>

const Template: ComponentStory<typeof TaroifyButton> = (args) => <TaroifyButton {...args} />

export const Button = Template.bind({})
Button.args = {
  children: 'Button',
}
