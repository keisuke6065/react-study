import {atomsName} from '../../utils/stories'
import {Heading, Props} from './index'
import {Story} from '@storybook/react'


const config = {
  title: atomsName('Heading'),
  component: Heading,
  args: {
    text: 'Sample'
  }
}

export default config

const Template: Story<Props> = (args) => <Heading {...args}/>

export const Maximum = Template.bind({})
Maximum.args ={
  size:'maximum'
}
export const Large = Template.bind({})
Large.args ={
  size: 'large'
}
export const Middle = Template.bind({})
Middle.args = {
  size: 'middle'
}
export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
export const Minimum = Template.bind({})
Minimum.args = {
  size: 'minimum'
}