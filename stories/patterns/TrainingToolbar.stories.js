import { createWorkspaceToolbar } from '../../src/ui/patterns/workspace-toolbar/workspace-toolbar.js';
const domains=[{value:'all',label:'Tous les domaines'},{value:'T1',label:'Identités et gouvernance'},{value:'T2',label:'Stockage'}];
export default {title:'Patterns/TrainingToolbar',tags:['autodocs'],render:args=>{const root=createWorkspaceToolbar({...args,domains,onResetDomain:()=>root.domainSelector.update({value:'all'})});if(args.open)requestAnimationFrame(()=>root.querySelector('button').click());return root;}};
export const Default={};
export const FiltersOpen={args:{open:true}};
export const ResetState={args:{domain:'T1'}};
export const Mobile={globals:{viewport:{value:'mobile',isRotated:false}}};
export const Dark={globals:{theme:'dark'}};
