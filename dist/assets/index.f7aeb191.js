import{D as e,a as t,M as a,b as s,c as r,d as l,T as n,e as i,r as o,o as c,f as d,g as u,w as f,F as g,h as p,i as m,j as x,k as y,t as h,l as b,m as v,n as w,p as k,q as _,s as C,u as j,_ as M,v as O,x as D,y as I,z as S,A as T,B as z,C as E,E as H}from"./vendor.20f57d86.js";const B=[{name:"Home",href:"#",icon:["fal","home-lg"],current:!0},{name:"My tasks",href:"#",icon:["fal","list"],current:!1},{name:"Recent",href:"#",icon:["fal","clock"],current:!1}],P=[{name:"Engineering",href:"#",bgColorClass:"bg-indigo-500"},{name:"Human Resources",href:"#",bgColorClass:"bg-green-500"},{name:"Customer Success",href:"#",bgColorClass:"bg-yellow-500"}],W=[{id:1,title:"GraphQL API",initials:"GA",team:"Engineering",members:[{name:"Dries Vincent",handle:"driesvincent",imageUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Lindsay Walton",handle:"lindsaywalton",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Courtney Henry",handle:"courtneyhenry",imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Tom Cook",handle:"tomcook",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],totalMembers:12,lastUpdated:"March 17, 2020",pinned:!0,bgColorClass:"bg-pink-600"}],R=W.filter((e=>e.pinned)),U={components:{Dialog:e,DialogOverlay:t,Menu:a,MenuButton:s,MenuItem:r,MenuItems:l,TransitionChild:n,TransitionRoot:i},setup(){const e=o(!1);return{navigation:B,teams:P,projects:W,pinnedProjects:R,sidebarOpen:e}}},q={class:"h-screen flex overflow-hidden bg-white"},J={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"},Q={class:"absolute top-0 right-0 -mr-12 pt-2"},A=u("span",{class:"sr-only"},"Close sidebar",-1),V=u("div",{class:"flex-shrink-0 flex items-center px-4"},[u("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})],-1),G={class:"mt-5 flex-1 h-0 overflow-y-auto"},L={class:"px-2"},N={class:"space-y-1"},X={class:"mt-8"},F=u("h3",{class:"px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",id:"teams-headline"}," Teams ",-1),$={class:"mt-1 space-y-1",role:"group","aria-labelledby":"teams-headline"},K={class:"truncate"},Y=u("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1),Z={class:"hidden lg:flex lg:flex-shrink-0"},ee={class:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100"},te=u("div",{class:"flex items-center flex-shrink-0 px-6"},[u("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})],-1),ae={class:"h-0 flex-1 flex flex-col overflow-y-auto"},se={class:"flex w-full justify-between items-center"},re=u("span",{class:"flex min-w-0 items-center justify-between space-x-3"},[u("img",{class:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),u("span",{class:"flex-1 flex flex-col min-w-0"},[u("span",{class:"text-gray-900 text-sm font-medium truncate"},"Jessy Schwarz"),u("span",{class:"text-gray-500 text-sm truncate"},"@jessyschwarz")])],-1),le={class:"py-1"},ne={class:"py-1"},ie={class:"py-1"},oe={class:"px-3 mt-5"},ce=u("label",{for:"search",class:"sr-only"},"Search",-1),de={class:"mt-1 relative rounded-md shadow-sm"},ue={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none","aria-hidden":"true"},fe=u("input",{type:"text",name:"search",id:"search",class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md",placeholder:"Search"},null,-1),ge={class:"px-3 mt-6"},pe={class:"space-y-1"},me={class:"mt-8"},xe=u("h3",{class:"px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",id:"teams-headline"}," Teams ",-1),ye={class:"mt-1 space-y-1",role:"group","aria-labelledby":"teams-headline"},he={class:"truncate"},be={class:"flex flex-col w-0 flex-1 overflow-hidden"},ve={class:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden"},we=u("span",{class:"sr-only"},"Open sidebar",-1),ke={class:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8"},_e={class:"flex-1 flex"},Ce={class:"w-full flex md:ml-0",action:"#",method:"GET"},je=u("label",{for:"search-field",class:"sr-only"},"Search",-1),Me={class:"relative w-full text-gray-400 focus-within:text-gray-600"},Oe={class:"absolute inset-y-0 left-0 flex items-center pointer-events-none"},De=u("input",{id:"search-field",name:"search-field",class:"block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Search",type:"search"},null,-1),Ie={class:"flex items-center"},Se=u("span",{class:"sr-only"},"Open user menu",-1),Te=u("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1),ze={class:"py-1"},Ee={class:"py-1"},He={class:"py-1"},Be={class:"flex-1 relative z-0 overflow-y-auto focus:outline-none"},Pe=m('<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"><div class="flex-1 min-w-0"><h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate"> Home </h1></div><div class="mt-4 flex sm:mt-0 sm:ml-4"><button type="button" class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"> Share </button><button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"> Create </button></div></div>',1),We={class:"px-4 mt-6 sm:px-6 lg:px-8"},Re=u("h2",{class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},"Pinned Projects",-1),Ue={class:"grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"},qe={class:"flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"},Je={class:"flex-1 px-4 py-2 text-sm truncate"},Qe={href:"#",class:"text-gray-900 font-medium hover:text-gray-600"},Ae={class:"text-gray-500"},Ve=u("span",{class:"sr-only"},"Open options",-1),Ge={class:"py-1"},Le={class:"py-1"},Ne={class:"mt-10 sm:hidden"},Xe=u("div",{class:"px-4 sm:px-6"},[u("h2",{class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},"Projects")],-1),Fe={class:"mt-3 border-t border-gray-200 divide-y divide-gray-100"},$e={href:"#",class:"group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"},Ke={class:"flex items-center truncate space-x-3"},Ye={class:"font-medium truncate text-sm leading-6"},Ze={class:"truncate font-normal text-gray-500"},et={class:"hidden mt-8 sm:block"},tt={class:"align-middle inline-block min-w-full border-b border-gray-200"},at={class:"min-w-full"},st=u("thead",null,[u("tr",{class:"border-t border-gray-200"},[u("th",{class:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},[u("span",{class:"lg:pl-2"},"Project")]),u("th",{class:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Members "),u("th",{class:"hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"}," Last updated "),u("th",{class:"pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"})])],-1),rt={class:"bg-white divide-y divide-gray-100"},lt={class:"px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900"},nt={class:"flex items-center space-x-3 lg:pl-2"},it={href:"#",class:"truncate hover:text-gray-600"},ot={class:"text-gray-500 font-normal"},ct={class:"px-6 py-3 text-sm text-gray-500 font-medium"},dt={class:"flex items-center space-x-2"},ut={class:"flex flex-shrink-0 -space-x-1"},ft={key:0,class:"flex-shrink-0 text-xs leading-5 font-medium"},gt={class:"hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right"},pt={class:"pr-6"},mt=u("span",{class:"sr-only"},"Open options",-1),xt={class:"py-1"},yt=y(" Edit "),ht=y(" Duplicate "),bt=y(" Share "),vt={class:"py-1"},wt=y(" Delete ");U.render=function(e,t,a,s,r,l){const n=x("DialogOverlay"),i=x("TransitionChild"),o=x("fa-icon"),m=x("Dialog"),w=x("TransitionRoot"),k=x("MenuButton"),_=x("MenuItem"),C=x("MenuItems"),j=x("Menu");return c(),d("div",q,[u(w,{as:"template",show:s.sidebarOpen},{default:f((()=>[u(m,{as:"div",static:"",class:"fixed inset-0 flex z-40 lg:hidden",onClose:t[2]||(t[2]=e=>s.sidebarOpen=!1),open:s.sidebarOpen},{default:f((()=>[u(i,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f((()=>[u(n,{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})])),_:1}),u(i,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:f((()=>[u("div",J,[u(i,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f((()=>[u("div",Q,[u("button",{class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t[1]||(t[1]=e=>s.sidebarOpen=!1)},[A,u(o,{icon:["fal","cross"],class:"h-6 w-6 text-white",title:"XIcon"})])])])),_:1}),V,u("div",G,[u("nav",L,[u("div",N,[(c(!0),d(g,null,p(s.navigation,(e=>(c(),d("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"],"aria-current":e.current?"page":void 0},[u(o,{icon:e.icon,class:[e.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]},null,8,["icon","class"]),y(" "+h(e.name),1)],10,["href","aria-current"])))),128))]),u("div",X,[F,u("div",$,[(c(!0),d(g,null,p(s.teams,(e=>(c(),d("a",{key:e.name,href:e.href,class:"group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"},[u("span",{class:[e.bgColorClass,"w-2.5 h-2.5 mr-4 rounded-full"],"aria-hidden":"true"},null,2),u("span",K,h(e.name),1)],8,["href"])))),128))])])])])])])),_:1}),Y])),_:1},8,["open"])])),_:1},8,["show"]),u("div",Z,[u("div",ee,[te,u("div",ae,[u(j,{as:"div",class:"px-3 mt-6 relative inline-block text-left"},{default:f((()=>[u("div",null,[u(k,{class:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"},{default:f((()=>[u("span",se,[re,u(o,{icon:["fal","sort-down"],class:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500",title:"SelectorIcon"})])])),_:1})]),u(b,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:f((()=>[u(C,{class:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"},{default:f((()=>[u("div",le,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"View profile",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Settings",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Notifications",2)])),_:1})]),u("div",ne,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Get desktop app",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Support",2)])),_:1})]),u("div",ie,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Logout",2)])),_:1})])])),_:1})])),_:1})])),_:1}),u("div",oe,[ce,u("div",de,[u("div",ue,[u(o,{icon:["fal","search"],class:"mr-3 h-4 w-4 text-gray-400",title:"SearchIcon"})]),fe])]),u("nav",ge,[u("div",pe,[(c(!0),d(g,null,p(s.navigation,(e=>(c(),d("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"],"aria-current":e.current?"page":void 0},[u(o,{icon:e.icon,class:[e.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]},null,8,["icon","class"]),y(" "+h(e.name),1)],10,["href","aria-current"])))),128))]),u("div",me,[xe,u("div",ye,[(c(!0),d(g,null,p(s.teams,(e=>(c(),d("a",{key:e.name,href:e.href,class:"group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"},[u("span",{class:[e.bgColorClass,"w-2.5 h-2.5 mr-4 rounded-full"],"aria-hidden":"true"},null,2),u("span",he,h(e.name),1)],8,["href"])))),128))])])])])])]),u("div",be,[u("div",ve,[u("button",{class:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden",onClick:t[3]||(t[3]=e=>s.sidebarOpen=!0)},[we,u(o,{icon:["fal","bars"],class:"h-6 w-6",title:"MenuAlt1Icon"})]),u("div",ke,[u("div",_e,[u("form",Ce,[je,u("div",Me,[u("div",Oe,[u(o,{icon:["fal","search"],class:"h-5 w-5",title:"SearchIcon"})]),De])])]),u("div",Ie,[u(j,{as:"div",class:"ml-3 relative"},{default:f((()=>[u("div",null,[u(k,{class:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"},{default:f((()=>[Se,Te])),_:1})]),u(b,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:f((()=>[u(C,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"},{default:f((()=>[u("div",ze,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"View profile",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Settings",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Notifications",2)])),_:1})]),u("div",Ee,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Get desktop app",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Support",2)])),_:1})]),u("div",He,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Logout",2)])),_:1})])])),_:1})])),_:1})])),_:1})])])]),u("main",Be,[Pe,u("div",We,[Re,u("ul",Ue,[(c(!0),d(g,null,p(s.pinnedProjects,(e=>(c(),d("li",{key:e.id,class:"relative col-span-1 flex shadow-sm rounded-md"},[u("div",{class:[e.bgColorClass,"flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"]},h(e.initials),3),u("div",qe,[u("div",Je,[u("a",Qe,h(e.title),1),u("p",Ae,h(e.totalMembers)+" Members",1)]),u(j,{as:"div",class:"flex-shrink-0 pr-2"},{default:f((()=>[u(k,{class:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"},{default:f((()=>[Ve,u(o,{icon:["fal","ellipsis-v"],class:"w-5 h-5",title:"DotsVerticalIcon"})])),_:1}),u(b,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:f((()=>[u(C,{class:"z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"},{default:f((()=>[u("div",Ge,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"View",2)])),_:1})]),u("div",Le,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Removed from pinned",2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"]},"Share",2)])),_:1})])])),_:1})])),_:1})])),_:1})])])))),128))])]),u("div",Ne,[Xe,u("ul",Fe,[(c(!0),d(g,null,p(s.projects,(e=>(c(),d("li",{key:e.id},[u("a",$e,[u("span",Ke,[u("span",{class:[e.bgColorClass,"w-2.5 h-2.5 flex-shrink-0 rounded-full"],"aria-hidden":"true"},null,2),u("span",Ye,[y(h(e.title)+" "+h(" ")+" ",1),u("span",Ze,"in "+h(e.team),1)])]),u(o,{icon:["fal","chevron-right"],class:"ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500",title:"ChevronRightIcon"})])])))),128))])]),u("div",et,[u("div",tt,[u("table",at,[st,u("tbody",rt,[(c(!0),d(g,null,p(s.projects,(e=>(c(),d("tr",{key:e.id},[u("td",lt,[u("div",nt,[u("div",{class:[e.bgColorClass,"flex-shrink-0 w-2.5 h-2.5 rounded-full"],"aria-hidden":"true"},null,2),u("a",it,[u("span",null,[y(h(e.title)+" "+h(" ")+" ",1),u("span",ot,"in "+h(e.team),1)])])])]),u("td",ct,[u("div",dt,[u("div",ut,[(c(!0),d(g,null,p(e.members,(e=>(c(),d("img",{key:e.handle,class:"max-w-none h-6 w-6 rounded-full ring-2 ring-white",src:e.imageUrl,alt:e.name},null,8,["src","alt"])))),128))]),e.totalMembers>e.members.length?(c(),d("span",ft,"+"+h(e.totalMembers-e.members.length),1)):v("",!0)])]),u("td",gt,h(e.lastUpdated),1),u("td",pt,[u(j,{as:"div",class:"relative flex justify-end items-center"},{default:f((()=>[u(k,{class:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"},{default:f((()=>[mt,u(o,{icon:["fal","ellipsis-v"],class:"w-5 h-5",title:"DotsVerticalIcon"})])),_:1}),u(b,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:f((()=>[u(C,{class:"mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"},{default:f((()=>[u("div",xt,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","group flex items-center px-4 py-2 text-sm"]},[u(o,{icon:["fal","edit"],class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",title:"PencilAltIcon"}),yt],2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","group flex items-center px-4 py-2 text-sm"]},[u(o,{icon:["fal","clone"],class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",title:"DuplicateIcon"}),ht],2)])),_:1}),u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","group flex items-center px-4 py-2 text-sm"]},[u(o,{icon:["fal","user-plus"],class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",title:"UserAddIcon"}),bt],2)])),_:1})]),u("div",vt,[u(_,null,{default:f((({active:e})=>[u("a",{href:"#",class:[e?"bg-gray-100 text-gray-900":"text-gray-700","group flex items-center px-4 py-2 text-sm"]},[u(o,{icon:["fal","trash-alt"],class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",title:"TrashIcon"}),wt],2)])),_:1})])])),_:1})])),_:1})])),_:1})])])))),128))])])])])])])])};const kt=w({history:k(),routes:[{path:"/",name:"home",component:U}]}),_t=_({devtools:!0,namespaced:!0,state:{},actions:{},getters:{},mutations:{}}),Ct=[{name:"Home",href:"#",icon:["fal","home-lg"],current:!0},{name:"My tasks",href:"#",icon:["fal","list"],current:!1},{name:"Recent",href:"#",icon:["fal","clock"],current:!1}],jt={components:{Dialog:e,DialogOverlay:t,Menu:a,MenuButton:s,MenuItem:r,MenuItems:l,TransitionChild:n,TransitionRoot:i},setup(){const e=o(!1);return{navigation:Ct,sidebarOpen:e}}},Mt={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"},Ot={class:"absolute top-0 right-0 -mr-12 pt-2"},Dt=u("span",{class:"sr-only"},"Close sidebar",-1),It=u("div",{class:"flex-shrink-0 flex items-center px-4"},[u("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})],-1),St={class:"mt-5 flex-1 h-0 overflow-y-auto"},Tt={class:"px-2"},zt={class:"space-y-1"},Et={class:"mt-8"},Ht=u("h3",{class:"px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",id:"teams-headline"}," Teams ",-1),Bt={class:"mt-1 space-y-1",role:"group","aria-labelledby":"teams-headline"},Pt={class:"truncate"},Wt=u("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1);jt.render=function(e,t,a,s,r,l){const n=x("DialogOverlay"),i=x("TransitionChild"),o=x("fa-icon"),m=x("Dialog"),b=x("TransitionRoot");return c(),d(b,{as:"template",show:s.sidebarOpen},{default:f((()=>[u(m,{as:"div",static:"",class:"fixed inset-0 flex z-40 lg:hidden",onClose:t[2]||(t[2]=e=>s.sidebarOpen=!1),open:s.sidebarOpen},{default:f((()=>[u(i,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f((()=>[u(n,{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})])),_:1}),u(i,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:f((()=>[u("div",Mt,[u(i,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f((()=>[u("div",Ot,[u("button",{class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t[1]||(t[1]=e=>s.sidebarOpen=!1)},[Dt,u(o,{icon:["fal","cross"],class:"h-6 w-6 text-white",title:"XIcon"})])])])),_:1}),It,u("div",St,[u("nav",Tt,[u("div",zt,[(c(!0),d(g,null,p(s.navigation,(e=>(c(),d("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"],"aria-current":e.current?"page":void 0},[u(o,{icon:e.icon,class:[e.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]},null,8,["icon","class"]),y(" "+h(e.name),1)],10,["href","aria-current"])))),128))]),u("div",Et,[Ht,u("div",Bt,[(c(!0),d(g,null,p(e.teams,(e=>(c(),d("a",{key:e.name,href:e.href,class:"group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"},[u("span",{class:[e.bgColorClass,"w-2.5 h-2.5 mr-4 rounded-full"],"aria-hidden":"true"},null,2),u("span",Pt,h(e.name),1)],8,["href"])))),128))])])])])])])),_:1}),Wt])),_:1},8,["open"])])),_:1},8,["show"])};const Rt={components:{ProfileSidebar:jt},setup:()=>({})},Ut={class:"container mx-auto bg-black"},qt=u("header",{class:"bg-white shadow"},[u("div",{class:" py-6 px-4 sm:px-6 lg:px-8"},[u("h1",{class:"text-3xl font-bold text-gray-900"}," Dashboard ")])],-1),Jt={class:"flex-1 relative z-0 overflow-y-auto focus:outline-none"};Rt.render=function(e,t,a,s,r,l){return c(),d("div",Ut,[qt,u("main",Jt,[C(e.$slots,"default")])])};const Qt={components:{Primary:Rt},setup:()=>({})},At=u("main",null,null,-1);Qt.render=function(e,t,a,s,r,l){const n=x("primary");return c(),d(n,null,{default:f((()=>[At])),_:1})};j.add(M),j.add(O),j.add(D),j.add(I),j.add(S);const Vt=T(Qt);Vt.use(kt),Vt.use(_t),Vt.component("fa-icon",z),Vt.component("fa-layers",E),Vt.component("fa-layers-text",H),Vt.mount("#app");
