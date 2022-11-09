import '../styles/global.css';
import { ReactNode, ButtonHTMLAttributes, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Text } from './Text';
import clsx from 'clsx';

var Citys = {
   'Bridgewatch': false,
   'Caerleon': false,
   'Fort-Sterling': false,
   'Lymhurst': false,
   'Martlock': false,
   'Thetford': false,
};

export interface CityButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   city: 'Bridgewatch' | 'Caerleon' | 'Fort-Sterling' | 'Lymhurst' | 'Martlock' | 'Thetford',
   children: ReactNode,
   asChild?: boolean,
}

export function CityButton({city, children, asChild, className, ...props}: CityButtonProps){

   const cityColor = pickCityColo(city);
   const [backgroundCityColor, setBackgroundCityColor] = useState('transparent');

   function CityButtonPressed() {
      if(Citys[city] == true){
         Citys[city] = false;
         setBackgroundCityColor('transparent');
      } else {
         Citys[city] = true;
         setBackgroundCityColor(cityColor);
      }
   }

   const Component = asChild ? Slot: 'button';

   return(
      <Component
         className={clsx(
            'flex items-center justify-center px-2 text-lg ring-1 rounded-lg h-[22px] text-gray-1000',
            {
               'ring-game-citys-Bridgewatch': city == 'Bridgewatch',
               'ring-game-citys-Caerleon': city == 'Caerleon',
               'ring-game-citys-Fort-Sterling': city == 'Fort-Sterling',
               'ring-game-citys-Lymhurst': city == 'Lymhurst',
               'ring-game-citys-Martlock': city == 'Martlock',
               'ring-game-citys-Thetford': city == 'Thetford',
            },
            {
               'text-gray-300': city == 'Fort-Sterling' && Citys[city] == true,
            },
         )}
         style={{background: backgroundCityColor}}
         onClick={() => CityButtonPressed()}
      >
         <Text size='xlg' font='Albion'>{children}</Text>
      </Component>
   );
}

export function pickCityColo(city: string){
   switch(city){
      case 'Bridgewatch':
         return ('#DE6E30');
      case 'Caerleon':
         return ('#54040C');
      case 'Fort-Sterling':
         return ('#F3F3E9');
      case 'Lymhurst':
         return ('#5B6418');
      case 'Martlock':
         return ('#637B97');
      case 'Thetford':
         return ('#653765');
      default:
         return ('#FFF');
   }
}