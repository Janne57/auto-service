"use strict";(self.webpackChunkauto_service=self.webpackChunkauto_service||[]).push([[868],{779:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var r=t(439),l=t(791),s=t(434),n=t(969),_=function(e){return e.cars.items},c=[300,400,500,600,700,800,1e3],o="Searchbar_form__Wyv65",i="Searchbar_form__text__RDQqO",u="Searchbar_form__text__div__YGJfg",m="Searchbar_form__select__SaaaI",d="Searchbar_form__select__price__yZ3ZU",h="Searchbar_form__text__mile__npGPn",x="Searchbar_form__text__input__4AHd9",f="Searchbar_form__text__inputlabel__+9mGh",p="Searchbar_form__text__inputlabelto__U53Zv",v="Searchbar_search_btn__y7oYa",b=t(184),j=function(e){var a=e.onSubmit,t=(0,l.useState)(""),j=(0,r.Z)(t,2),g=j[0],N=j[1],C=(0,l.useState)(""),S=(0,r.Z)(C,2),F=S[0],k=S[1],y=(0,s.v9)(_);console.log("cars",y);var E=[],T=[];return y&&(y.forEach((function(e){return E.push({value:e.make,label:e.make})})),c.forEach((function(e){return T.push({value:e,label:e})}))),console.log("makesOptions",E),console.log("rentalPriceOptions",T),(0,b.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),N(e.currentTarget.value),a(g.trim()),N("")},children:[(0,b.jsxs)("label",{className:i,children:["Car brand",(0,b.jsx)(n.ZP,{className:m,defaultValue:{value:"Enter the text...",label:"Enter the text..."},name:"make",value:{value:"",label:F||"Enter the text..."},options:[{value:"Enter the text..."}].concat(E),onChange:function(e){return function(e){var a=e.currentTarget;k(a),console.log("selectedValue",a)}(e)}})]}),(0,b.jsxs)("label",{className:i,children:["Price/1 hour",(0,b.jsx)(n.ZP,{className:d,placeholder:"Select...",defaultValue:{value:"To $",label:"To $"},name:"rentalPrice",value:{value:"",label:"To $"},options:[{value:"To $"}].concat(T)})]}),(0,b.jsxs)("label",{className:h,children:["Car mileage / km",(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)("input",{className:x,type:"text",autoComplete:"off",autoFocus:!0,name:"query",value:g,id:"mileFrom"}),(0,b.jsx)("label",{for:"mileFrom",className:f,children:"From"}),(0,b.jsx)("input",{className:x,type:"text",autoComplete:"off",autoFocus:!0,name:"query",value:g,id:"mileTo"}),(0,b.jsx)("label",{for:"mileTo",className:p,children:"To"})]})]}),(0,b.jsx)("button",{type:"submit",className:v,children:(0,b.jsx)("span",{className:"button-label",children:"Search"})})]})},g=t(527),N=t.p+"static/media/placeholder.e5143ea2ffb335983a04.png",C="CatalogForm_advert__list__OBTGn",S="CatalogForm_advert__list__item__zDmtj",F="CatalogForm_advert__list__image__NrZEV",k="CatalogForm_advert__list__textblue__Pw0K7",y="CatalogForm_advert__list__text__L0XE6",E="CatalogForm_advert__list__flex__NMd0r",T="CatalogForm_advert__list__text__opp__CD7k+",P="CatalogForm_advert_btn__gFgYK",Z="CatalogForm_advert_icon_btn__R0vMV",V=function(){var e=(0,s.v9)(_),a=(0,s.I0)();return(0,l.useEffect)((function(){a((0,g.c)())}),[a]),(0,b.jsx)("div",{children:(0,b.jsx)("ul",{className:C,children:e.map((function(e){var a=e.id,t=e.make,r=e.model,l=e.year,s=e.rentalPrice,n=e.img,_=e.address,c=e.rentalCompany,o=e.type,i=e.functionalities;return(0,b.jsxs)("li",{className:S,children:[(0,b.jsx)("img",{src:n||N,alt:t,className:F,width:"274",height:"268",onError:function(e){return e.target.src=N}}),(0,b.jsx)("button",{className:Z,style:{stroke:"red"},children:(0,b.jsx)("i",{className:"fa fa-heart"})}),(0,b.jsxs)("p",{className:y,children:[(0,b.jsxs)("div",{className:E,children:[(0,b.jsx)("span",{children:t}),(0,b.jsxs)("span",{className:k,children:[r,","]}),(0,b.jsx)("span",{children:l})]}),(0,b.jsxs)("span",{children:["$",s]})]}),(0,b.jsxs)("p",{className:T,children:[(0,b.jsx)("span",{children:_}),(0,b.jsx)("span",{children:c}),(0,b.jsx)("span",{children:o}),(0,b.jsx)("span",{children:a}),(0,b.jsx)("span",{children:i[1]})]}),(0,b.jsx)("button",{className:P,children:"Learn more"})]},a)}))})})},$={};function w(){return(0,b.jsxs)("div",{className:$.container,children:[(0,b.jsx)(j,{}),(0,b.jsx)(V,{})]})}}}]);
//# sourceMappingURL=868.2fc97263.chunk.js.map