import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
   title: "Components/Text",
   component: Text,
   args: {
      font: 'Albion',
      size: 'xlg',
      color: 'gray-1000',
      children: 'Texto',
   },
   argTypes: {
      asChild:{
         table: {
            disable: true,
         }
      }
   }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const FocusUsage: StoryObj<TextProps> = {
   args: {
      children: 'Uso de Foco',
      color: 'gold',
      font: 'Roboto',
      size: 'reg'
   }
}

export const Profit: StoryObj<TextProps> = {
   args: {
      children: 'Ganho',
      color: 'green',
      font: 'Roboto',
      size: 'reg',
   }
}

export const Loss: StoryObj<TextProps> = {
   args: {
      children: 'Perda',
      color: 'red',
      font: 'Roboto',
      size: 'reg',
   }
}