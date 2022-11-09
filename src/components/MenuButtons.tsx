import '../styles/global.css';
import { useState } from "react";
import { BowIcon, BricksIcon, ClothIcon, GearsIcon, LeatherIcon, MetalBarIcon, PlanksIcon, SwordIcon, WizardStaffIcon } from '../img/Icons';

export interface MenuButtonsProps {
   starterColor?: string,
   hoverColor?: string,
   icon: 'BowIcon' | 'BricksIcon' | 'ClothIcon' | 'GearsIcon' | 'LeatherIcon' | 'MetalBarIcon' | 'PlanksIcon' | 'SwordIcon' | 'WizardStaffIcon',
   href?: string,
}

export function MenuButtons({starterColor, hoverColor, icon, href}: MenuButtonsProps) { 
   const [fill, setFill] = useState(starterColor || "#C0C0C0");
   const [stroke, setStroke] = useState(starterColor || "#C0C0C0");

   function ChangeMenuButtonColor (fill: string, stroke: string)  {
      setFill(fill);
      setStroke(stroke);
   }
   
   function SvgIconComponent() {
      switch(icon) {
         case 'BowIcon':
            return(<BowIcon fill={fill} stroke={stroke}/>);
         case 'BricksIcon':
            return(<BricksIcon fill={fill} stroke={stroke}/>);
         case 'ClothIcon':
            return(<ClothIcon fill={fill} stroke={stroke}/>);
         case 'GearsIcon':
            return(<GearsIcon fill={fill} stroke={stroke}/>);
         case 'LeatherIcon':
            return(<LeatherIcon fill={fill} stroke={stroke}/>);
         case 'MetalBarIcon':
            return(<MetalBarIcon fill={fill} stroke={stroke}/>);
         case 'PlanksIcon':
            return(<PlanksIcon fill={fill} stroke={stroke}/>);
         case 'SwordIcon':
            return(<SwordIcon fill={fill} stroke={stroke}/>);
         case 'WizardStaffIcon':
            return(<WizardStaffIcon fill={fill} stroke={stroke}/>);
         }
   }

   return(
      <button
         className={'flex w-16 h-16 rounded-[8px] hover:shadow-light'}
         onMouseOver={() => ChangeMenuButtonColor(hoverColor ?? "#006BB9", hoverColor ?? "#006BB9")}
         onMouseLeave={() => ChangeMenuButtonColor(starterColor ?? "#C0C0C0", starterColor ?? "#C0C0C0")}
         style={{borderColor: fill, borderWidth: 1}}
      >
         {SvgIconComponent()}
      </button>
   );
// #006BB9
}