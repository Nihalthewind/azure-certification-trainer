import {createButton} from '../../components/button/button.js';
export function reviewPage(items,page=0,size=8){const index=Math.max(0,Math.min(page,Math.ceil(items.length/size)-1));return {items:items.slice(index*size,(index+1)*size),page:index,start:items.length?index*size+1:0,end:Math.min((index+1)*size,items.length),total:items.length,pages:Math.ceil(items.length/size)}}
export function createReviewRow(item,onOpen){const row=document.createElement('button');row.type='button';row.className='review-item ui-review-row';row.dataset.mistakeQ=item.id;const id=document.createElement('span'),copy=document.createElement('span'),title=document.createElement('strong'),domain=document.createElement('small'),status=document.createElement('small');id.textContent=item.id;title.textContent=item.title;domain.textContent=item.domainLabel;copy.className='ui-review-row__copy';copy.append(title,domain);status.textContent=item.status+' · Ouvrir';row.append(id,copy,status);row.addEventListener('click',()=>onOpen?.(item.id));return row;}
export function createPagination(model,onPage){const root=document.createElement('nav');root.className='ui-pagination';root.setAttribute('aria-label','Pagination');const previous=createButton({label:'Précédent',disabled:!model.page,onClick:()=>onPage(model.page-1)}),next=createButton({label:'Suivant',disabled:model.page+1>=model.pages,onClick:()=>onPage(model.page+1)}),count=document.createElement('span');count.className='ui-pagination__count';count.role='status';count.textContent=model.start+'–'+model.end+' sur '+model.total;root.append(previous,count,next);return root;}
export const REVIEW_SOURCES=Object.freeze({
  errors:{label:'Mes erreurs',description:'Reprenez les questions sur lesquelles vous vous êtes trompé.',empty:'Aucune erreur à retravailler. Continuez votre entraînement.'},
  flagged:{label:'À revoir',description:'Retravaillez les questions que vous avez marquées pour révision.',empty:'Aucune question marquée. Utilisez « À revoir » pendant votre apprentissage.'},
  favorites:{label:'Favoris',description:'Reprenez les questions que vous avez ajoutées aux favoris.',empty:'Aucun favori dans cette sélection. Ajoutez des favoris depuis une question.'},
});

/** Session selection only. Never renders prompts, corrections or question titles. */
export function createReviewSession({source='errors',count=0,domains=[],domain='all',onSource,onDomain,onStart,startButton,production=false}={}) {
  const root=document.createElement('section');root.className='ui-review-session';
  const filters=document.createElement('div');filters.className='v3-review-filters';filters.setAttribute('aria-label','Sources de révision');if(production)filters.id='reviewFilters';
  for(const [id,item] of Object.entries(REVIEW_SOURCES)){const b=createButton({label:item.label,onClick:()=>onSource?.(id)});b.dataset.reviewFilter=id;b.setAttribute('aria-pressed',String(id===source));filters.append(b);}
  const field=document.createElement('label');field.className='ui-review-session__domain';const label=document.createElement('span');label.textContent='Domaine de révision';
  const select=document.createElement('select');select.setAttribute('aria-label','Domaine de révision');if(production)select.id='reviewDomainFilter';
  for(const [value,text] of [['all','Tous les domaines'],...domains]){const o=document.createElement('option');o.value=value;o.textContent=text;select.append(o);}select.value=domain;select.onchange=()=>onDomain?.(select.value);field.append(label,select);
  const item=REVIEW_SOURCES[source]||REVIEW_SOURCES.errors,panel=document.createElement('section');panel.className='ui-review-session__card';panel.setAttribute('aria-live','polite');
  const heading=document.createElement('h3');heading.textContent=item.label;const available=document.createElement('p');available.className='ui-review-session__count';available.dataset.reviewCount=String(count);available.textContent=count+' questions à retravailler';
  const description=document.createElement('p');description.textContent=count?item.description:item.empty;
  const start=startButton||createButton({label:'Démarrer la révision',variant:'primary',onClick:onStart});(start.querySelector('.ui-button__label')||start).textContent='Démarrer la révision';start.disabled=count===0;
  panel.append(heading,available,description,start);root.append(filters,field,panel);return root;
}
