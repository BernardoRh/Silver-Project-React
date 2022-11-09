import '../styles/global.css';
import { HTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
   size: 'sm' | 'reg' | 'md' | 'lg' | 'xlg' | '2xlg',
   font: 'Albion' | 'Roboto',
   color?: 'gray-1000' | 'gray-300' | 'gold' | 'green' | 'red',
   children: ReactNode,
   asChild?: boolean,
}

export function Text({size, font, color, children, asChild, className, ...props}: TextProps) {
   const Component = asChild ? Slot: 'p';

   return(
      <Component className={clsx(
         {
            'font-Albion': font == 'Albion',
            'font-Roboto': font == 'Roboto',
         },
         {
            'text-sm': size == 'sm',
            'text-reg': size == 'reg',
            'text-md': size == 'md',
            'text-lg': size == 'lg',
            'text-xlg': size == 'xlg',
            'text-2xlg': size == '2xlg',
         },
         {
            'text-gray-1000': color == 'gray-1000',
            'text-gray-300': color == 'gray-300',
            'text-game-gold': color == 'gold',
            'text-green': color == 'green',
            'text-red': color == 'red',
         }, className)
      } {...props}>
         {children}
      </Component>
   )
}