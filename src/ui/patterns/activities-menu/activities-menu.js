import {createButton} from '../../components/button/button.js';
import {createIcon} from '../../icons/icons.js';
let sequence=0;
export function createActivitiesMenu({onHistory,onFavorites,open=false}={}) {
  const element=document.createElement('div');element.className='ui-activities-menu';
  const trigger=createButton({label:'Mes activités',variant:'secondary'}),menu=document.createElement('div');
  trigger.prepend(createIcon('layers'));trigger.append(createIcon('chevronDown'));trigger.setAttribute('aria-haspopup','menu');
  menu.className='ui-activities-menu__popup';menu.id='activities-menu-'+(++sequence);menu.setAttribute('role','menu');menu.hidden=true;
  trigger.setAttribute('aria-controls',menu.id);
  const items=[['Historique',onHistory],['Favoris',onFavorites]].filter(([,fn])=>typeof fn==='function').map(([label,fn])=>{
    const b=createButton({label,variant:'ghost',onClick:()=>{setOpen(false);fn();}});b.setAttribute('role','menuitem');b.tabIndex=-1;menu.append(b);return b;
  });
  function setOpen(value,focus=false){menu.hidden=!value;trigger.setAttribute('aria-expanded',String(value));if(focus)(value?items[0]:trigger)?.focus({preventScroll:true});}
  trigger.onclick=()=>setOpen(menu.hidden,true);
  trigger.onkeydown=e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();e.stopPropagation();setOpen(true);items[e.key==='ArrowDown'?0:items.length-1]?.focus();}};
  element.onkeydown=e=>{if(e.key==='Escape'&&!menu.hidden){e.preventDefault();e.stopPropagation();setOpen(false,true);}else if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)&&!menu.hidden){e.preventDefault();const i=items.indexOf(document.activeElement),next=e.key==='Home'?0:e.key==='End'?items.length-1:(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items[next]?.focus();}};
  // relatedTarget is reliable during the blur/focus handoff; activeElement can
  // temporarily be body and would remove a mouse target before its click.
  element.addEventListener('focusout',event=>{if(!element.contains(event.relatedTarget))setOpen(false);});
  const outside=e=>{if(!element.isConnected){document.removeEventListener('pointerdown',outside);return;}if(!element.contains(e.target))setOpen(false);};document.addEventListener('pointerdown',outside);
  element.append(trigger,menu);setOpen(open);return {element,trigger,setOpen,destroy(){document.removeEventListener('pointerdown',outside);}};
}
