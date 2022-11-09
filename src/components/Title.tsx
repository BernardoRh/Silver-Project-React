import '../styles/global.css';
import { Silver } from '../img/Silver';
import { Text } from './Text';

export interface TitleProps {}

export function Title({...props}:TitleProps) {
   return(
      <header className='flex flex-row items-center justify-center px-2 py-1 gap-1'>
         <Silver />
         <Text size='2xlg' font='Albion' color='gray-1000' className='m-0'>
            Silver Project
         </Text>
      </header>
   );

}