/** Adopt the existing DOM without replacing IDs, handlers or learning state. */
export function mountPageLayout(container,header,{contentClass=''}={}) {
  container.classList.add('ui-page-container');header.classList.add('ui-page-header');
  let content=container.querySelector(':scope > .ui-page-content');
  if(!content){content=document.createElement('div');content.className='ui-page-content '+contentClass;
    for(const child of [...container.children])if(child!==header)content.append(child);
    container.append(content);
  }
  return {container,header,content};
}
