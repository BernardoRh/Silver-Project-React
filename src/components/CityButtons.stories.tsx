import { Meta, StoryObj } from "@storybook/react";
import { CityButton, CityButtonProps } from "./CityButtons";
import { Text } from "./Text";

export default {
   title: 'Components/CityButton',
   component: CityButton,
   args: {
      city: 'Fort-Sterling',
      children: [
         <Text font="Albion" size="xlg">
            Fort Sterling
         </Text>
      ]
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