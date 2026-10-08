import { createSearchBar } from '../../src/ui/components/search-bar/search-bar.js';
export default { title: 'Components/SearchBar', tags: ['autodocs'], render: args => {
  const search=createSearchBar(args);search.style.width='min(480px, 90vw)';
  if(args.focus)requestAnimationFrame(()=>search.querySelector('input').focus());
  search.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();search.querySelector('input').focus();}});
  return search;
}};
export const Default={};
export const Focus={args:{focus:true}};
export const WithValue={args:{value:'Identités managées'}};
export const KeyboardFocus={args:{focus:true}};
export const Dark={globals:{theme:'dark'}};
