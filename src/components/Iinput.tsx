import '../styles/global.css';
import { InputHTMLAttributes, ReactNode } from 'react';

let Tiers = {
   'T4': localStorage.getItem('T4') ?? 0,
   'T5': 0,
   'T6': 0,
   'T7': 0,
   'T8': 0,
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
   tier: 'T4' | 'T5' | 'T6' | 'T7' | 'T8',
   children: ReactNode,
}



export function InputEspecializationTier({tier, children, ...props}: InputProps){
   localStorage.getItem('T4');
}