import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from './Tag'

export default {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const DefaultTag = Template.bind({})
DefaultTag.args = {
  label: 'Tag',
}
