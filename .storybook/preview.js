import 'destyle.css'
import {RecoilRoot} from 'recoil'
import StoryRouter from 'storybook-react-router';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators =  [StoryRouter(), (Story) => <RecoilRoot><Story/></RecoilRoot>]