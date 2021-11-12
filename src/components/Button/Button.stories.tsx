import {Story} from '@storybook/react'
import {Button, Props} from './index'

const config = {
  title: 'atoms/Button',
  component: Button
}

export default config

const Template: Story<Props> = (args) => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
  text: 'sample'
}

export const Small = Template.bind({})
Small.args = {
  text: 'sample',
  size: 'small'
}

export const Medium = Template.bind({})
Medium.args = {
  text: 'sample',
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  text: 'sample',
  size: 'large'
}
