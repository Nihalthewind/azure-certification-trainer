import { createButton } from '../../src/ui/components/button/button.js';
export default {title:'Components/Progress',tags:['autodocs'],render:args=>{
  const root=document.createElement('div');root.style.width='min(480px, 90vw)';
  const track=document.createElement('div');track.className='ui-course-hub__track';track.setAttribute('role','progressbar');track.setAttribute('aria-label','Progression');track.setAttribute('aria-valuemin','0');track.setAttribute('aria-valuemax','100');
  const fill=document.createElement('span');fill.className='ui-course-hub__fill';fill.style.width='22%';track.setAttribute('aria-valuenow','22');track.append(fill);root.append(track);
  if(args.updating)root.append(createButton({label:'Mettre à jour la progression',onClick:()=>{fill.style.width='64%';track.setAttribute('aria-valuenow','64');}}));return root;
}};
export const Static={parameters:{docs:{description:{story:'Même dégradé Azure → cyan pour la formation et chaque thème, avec les tokens Light/Dark existants.'}}}};
export const Updating={args:{updating:true}};
export const Dark={args:{updating:true},globals:{theme:'dark'}};
export const ReducedMotion={args:{updating:true},parameters:{docs:{description:{story:'Émuler prefers-reduced-motion: reduce dans le navigateur : état final immédiat.'}}}};
