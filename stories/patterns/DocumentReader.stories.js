import {createDocumentReader} from '../../src/ui/patterns/document-reader/document-reader.js';
import {renderPage} from '../pages/trainer-page-stories.js';
export default {title:'Patterns/DocumentReader',parameters:{layout:'fullscreen'}};
function render(){const root=renderPage({mode:'study',density:'balanced'});const reader=createDocumentReader({layoutRoot:root});root.append(reader.element);reader.open({url:new URL('../../assets/cloud-mark.png',import.meta.url).href,label:'Support source'});return root;}
export const Image={render,globals:{theme:'light'}};
export const Dark={render,globals:{theme:'dark'}};
export const Mobile={render,globals:{theme:'light',viewport:{value:'mobile',isRotated:false}}};
export const MobileDark={render,globals:{theme:'dark',viewport:{value:'mobile',isRotated:false}}};
export const Tablet={render,globals:{theme:'light',viewport:{value:'tablet',isRotated:false}}};
