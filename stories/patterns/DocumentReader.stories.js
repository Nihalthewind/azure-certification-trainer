import {createDocumentReader} from '../../src/ui/patterns/document-reader/document-reader.js';
import {renderPage} from '../pages/trainer-page-stories.js';
import {createQuestionCard} from '../../src/ui/patterns/question-card/question-card.js';
import '../../questions.js';
export default {title:'Patterns/DocumentReader',parameters:{layout:'fullscreen'}};
function render({zoomed=false,hand=true}={}){
 const q=window.AZ104_QUESTIONS.find(q=>q.id==='T2-Q88');
 const root=renderPage({mode:'study',density:'balanced'});
 root.querySelector('.ui-question-card').replaceWith(createQuestionCard({questionId:q.id,topic:'STOCKAGE',questionNumber:128,totalQuestions:568,title:'Choisissez la bonne réponse',prompt:q.prompt,answers:q.options,selectedIndexes:[2]}));
 const reader=createDocumentReader({layoutRoot:root});root.append(reader.element);
 const url=q.assets[0];reader.open({url:new URL('/'+url,location.href).href,crop:q.assetCrops[url],label:'Illustration source · T2-Q88'});
 if(zoomed)for(let i=0;i<8;i++)reader.element.querySelector('[data-reader-action=zoom-in]').click();
 if(!hand)reader.element.querySelector('[data-reader-action=hand]').click();
 return root;
}
export const Image={render,globals:{theme:'light'}};
export const Dark={render,globals:{theme:'dark'}};
export const Mobile={render,globals:{theme:'light',viewport:{value:'mobile',isRotated:false}}};
export const MobileDark={render,globals:{theme:'dark',viewport:{value:'mobile',isRotated:false}}};
export const Tablet={render,globals:{theme:'light',viewport:{value:'tablet',isRotated:false}}};
export const TabletDark={render,globals:{theme:'dark',viewport:{value:'tablet',isRotated:false}}};
export const Zoomed={render,args:{zoomed:true},globals:{theme:'light'}};
export const HandDisabled={render,args:{hand:false},globals:{theme:'light'}};
