import { Meta, StoryObj } from "@storybook/react";
import { MenuButtons, MenuButtonsProps } from "./MenuButtons";

export default {
   title: 'Components/MenuButtons',
   component: MenuButtons,
   args: {
      icon: "BowIcon",
   }
}as Meta<MenuButtonsProps>

export const Default: StoryObj<MenuButtonsProps> = {}