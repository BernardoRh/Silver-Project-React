import { Meta, StoryObj } from "@storybook/react";
import { CityButton, CityButtonProps } from "./CityButtons";

export default {
   title: 'Components/CityButton',
   component: CityButton,
   args: {
      city: 'Fort-Sterling',
      children: 'Fort Sterling'
   },
   argTypes: {
      asChild:{
         table: {
            disable: true,
         }
      }
   }
} as Meta<CityButtonProps>

export const Default: StoryObj<CityButtonProps> = {}