(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(52)},38:function(e,t,a){},39:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(10),c=a.n(l),i=(a(37),a(38),a(11)),s=a(12),o=a(16),m=a(13),h=a(17),f="#E8E500",u="#FF9472",g="#13CA91",E="#B76CFD",d="#FF2281",p="#037A90",v="#F85125",b=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).getVerticalPosition=function(e){switch(e){case 0:return 0;case 1:return 20;case 2:return 40;case 3:return 60;default:return 0}},a.setChordPosition=function(e,t){switch(e){case 1:return"translate(".concat(a.getVerticalPosition(t),",0)");case 2:return"translate(".concat(a.getVerticalPosition(t),",20)");case 3:return"translate(".concat(a.getVerticalPosition(t),",40)");case 4:return"translate(".concat(a.getVerticalPosition(t),",60)");default:return""}},a.getSize=function(e,t){if(e)switch(e){case"x2":case"X2":case"md":return 2*t;case"x3":case"X3":case"lg":return 3*t;case"x4":case"X4":case"xl":return 4*t;default:return t}return t},a.getWidth=function(e){return a.getSize(e,90)},a.getHeight=function(e){return a.getSize(e,134)},a.getChordColor=function(){var e=null;switch(Math.trunc(0+7*Math.random())){case 0:e=f;break;case 1:e=u;break;case 2:e=g;break;case 3:e=E;break;case 4:e=d;break;case 5:e=p;break;case 6:e=v;break;default:e="#fff"}return e},a.getChords=function(e,t,r){if(e)return e.map(function(e,r){return n.a.createElement(n.a.Fragment,null," ",0!==e?n.a.createElement(n.a.Fragment,null,n.a.createElement("g",{key:r,transform:a.setChordPosition(e,r)},n.a.createElement("circle",{r:"6",fill:a.getChordColor()}),n.a.createElement("text",{className:"text-chord",y:"4"},t?t[r]:null))):n.a.createElement(n.a.Fragment,null)," ")})},a.getOpenChord=function(e){if(e)return e.map(function(e,t){return n.a.createElement(n.a.Fragment,null," ",0===e?n.a.createElement("circle",{className:"open-chord",cx:a.getVerticalPosition(t),r:"4"}):n.a.createElement(n.a.Fragment,null)," ")})},a.getNotes=function(e){if(e)return e.map(function(e,t){return n.a.createElement("text",{className:"text-notes",x:a.getVerticalPosition(t)},e)})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.position,r=e.chords,l=e.fingers,c=e.nut,i=e.notes,s=e.size;return n.a.createElement("svg",{className:"base",width:this.getWidth(s),height:this.getHeight(s),viewBox:"0 0 84 134",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,t),n.a.createElement("text",{className:"text-title",x:"48",y:"16"},t),n.a.createElement("g",{transform:"translate(16,28)"},a?n.a.createElement("text",{className:"text-position",x:"-14",y:"17"},a):n.a.createElement("rect",{className:"nut",height:"4",width:"62"}),n.a.createElement("g",{transform:"translate(0,2)"},n.a.createElement("rect",{className:"sheet",height:"80",width:"2",x:"0"}),n.a.createElement("rect",{className:"sheet",height:"80",width:"2",x:"20"}),n.a.createElement("rect",{className:"sheet",height:"80",width:"2",x:"40"}),n.a.createElement("rect",{className:"sheet",height:"80",width:"2",x:"60"})),n.a.createElement("g",{transform:"translate(0,2)"},n.a.createElement("rect",{className:"sheet",height:"2",width:"62",y:"0"}),n.a.createElement("rect",{className:"sheet",height:"2",width:"62",y:"20"}),n.a.createElement("rect",{className:"sheet",height:"2",width:"62",y:"40"}),n.a.createElement("rect",{className:"sheet",height:"2",width:"62",y:"60"}),n.a.createElement("rect",{className:"sheet",height:"2",width:"62",y:"80"})),n.a.createElement("g",{transform:"translate(1,-5)"},this.getOpenChord(r)),n.a.createElement("g",{transform:"translate(1,13)"},this.getChords(r,l,c)),n.a.createElement("g",{transform:"translate(1,98)"},this.getNotes(i))))}}]),t}(r.Component)),y=a(54),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).createChords=function(e){if(console.log(a.props.windowWidth),Array.isArray(e))return e.map(function(e,t){var a=e.title,r=e.position,l=e.chords,c=e.fingers,i=e.notes;return n.a.createElement(y.a,{lg:2,md:3,sm:6,xl:2,xs:12,className:"text-center"},n.a.createElement(b,{title:a,position:r,chords:l,fingers:c,notes:i,size:"md"}))});var t=e.title,r=e.position,l=e.chords,c=e.fingers,i=e.notes;return n.a.createElement(y.a,{lg:2,md:3,sm:6,xl:2,xs:12,className:"text-center"},n.a.createElement(b,{title:t,position:r,chords:l,fingers:c,notes:i,size:"md"}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement(n.a.Fragment,null,this.createChords(e))}}]),t}(r.Component),x={higher:{base:{title:"C",position:0,chords:[0,0,0,3],fingers:[0,0,0,3],notes:["G","C","E","C"]}},minor:{base:{chords:[0,3,3,3],fingers:[0,1,1,1],title:"Cm",position:0,notes:["G","D#","G","C"]}}},z={higher:{base:{chords:[2,2,2,0],fingers:[2,3,1,0],title:"D",position:0,notes:["A","D","F#","A"]}},minor:{base:{chords:[2,2,1,0],fingers:[2,3,1,0],title:"Dm",position:0,notes:["A","D","F","A"]}}},C={higher:{base:{chords:[1,4,0,2],fingers:[1,4,0,2],title:"E",position:0,notes:["G#","E","E","B"]}},minor:{base:{chords:[0,4,3,2],fingers:[0,3,2,1],title:"Em",position:0,notes:["G","E","G","B"]}}},O={higher:{base:{chords:[2,0,1,0],fingers:[2,0,1,0],title:"F",position:0,notes:["A","C","F","A"]}},minor:{base:{chords:[1,0,1,3],fingers:[1,0,2,4],title:"Fm",position:0,sub:["G#","C","F","C"]}}},A={higher:{base:{chords:[0,2,3,2],fingers:[0,1,3,2],title:"G",position:0,notes:["G","D","G","B"]}},minor:{base:{chords:[0,2,3,1],fingers:[0,2,3,1],title:"Gm",position:0,notes:["G","D","G","A#"]}}},N={higher:{base:{chords:[2,1,0,0],fingers:[2,1,0,0],title:"A",position:0,notes:["A","C#","E","A"]}},minor:{base:{chords:[2,0,0,0],fingers:[2,0,0,0],title:"Am",position:0,notes:["A","C","E","A"]}}},D={higher:{base:{chords:[4,3,2,2],fingers:[3,2,1,1],title:"B",position:0,notes:["B","D#","F#","B"]}},minor:{base:{chords:[4,2,2,2],fingers:[3,1,1,1],title:"Bm",position:0,notes:["A","C","E","A"]}}},j=a(55),F=a(56);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var P=n.a.createElement("path",{d:"m304.464844 296c5.660156-10.960938 8.414062-23.191406 8-35.519531 0-40.648438-30.589844-74.800781-72-84.480469h-48c-41.40625 9.679688-72 43.832031-72 84.480469-.414063 12.328125 2.339844 24.558593 8 35.519531-15.832032 18.402344-24.371094 41.96875-24 66.238281 0 56.203125 50.144531 101.761719 112 101.761719 61.855468 0 112-45.558594 112-101.761719.371094-24.269531-8.167969-47.835937-24-66.238281zm0 0",fill:"#f9bb4b"}),G=n.a.createElement("path",{d:"m184.464844 0h64v80h-64zm0 0",fill:"#f9bb4b"}),M=n.a.createElement("g",{fill:"#394d5c"},n.a.createElement("path",{d:"m160.464844 8h24v16h-24zm0 0"}),n.a.createElement("path",{d:"m248.464844 8h24v16h-24zm0 0"}),n.a.createElement("path",{d:"m160.464844 40h24v16h-24zm0 0"}),n.a.createElement("path",{d:"m248.464844 40h24v16h-24zm0 0"})),R=n.a.createElement("path",{d:"m145.121094 202.175781c-15.636719 15.386719-24.507813 36.367188-24.65625 58.304688-.414063 12.328125 2.339844 24.558593 8 35.519531-6.8125 7.679688-12.253906 16.476562-16.085938 26 63.515625 39.816406 134.921875 65.367188 209.277344 74.894531 4.460938-11.011719 6.773438-22.773437 6.808594-34.65625.019531-12.132812-2.023438-24.1875-6.039063-35.636719-71.0625-21.085937-133.3125-64.769531-177.304687-124.425781zm0 0",fill:"#d5716e"}),S=n.a.createElement("path",{d:"m192.464844 360h48v40h-48zm0 0",fill:"#d9833b"}),V=n.a.createElement("path",{d:"m168.464844 400h96v32h-96zm0 0",fill:"#ffd782"}),W=n.a.createElement("path",{d:"m192.464844 80h48v184h-48zm0 0",fill:"#f1d77e"}),I=n.a.createElement("path",{d:"m128.464844 368h16v16h-16zm0 0",fill:"#ffd782"}),X=n.a.createElement("path",{d:"m264.464844 232h16v16h-16zm0 0",fill:"#ffd782"}),H=n.a.createElement("path",{d:"m112.464844 102.238281v-81.34375l-88 29.335938v61.769531c-11.699219-.113281-21.808594 8.148438-24.023438 19.636719-2.21875 11.488281 4.085938 22.917969 14.984375 27.171875 10.902344 4.25 23.28125.105468 29.425781-9.851563 6.144532-9.953125 4.300782-22.878906-4.386718-30.71875v-24.476562l56-18.664063v20.902344c-11.699219-.113281-21.808594 8.148438-24.023438 19.636719-2.21875 11.488281 4.085938 22.917969 14.984375 27.171875 10.902344 4.25 23.28125.105468 29.425781-9.851563 6.144532-9.953125 4.300782-22.878906-4.386718-30.71875zm-88 41.761719c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8c4.417968 0 8 3.582031 8 8s-3.582032 8-8 8zm16-67.097656v-15.132813l56-18.664062v15.132812zm56 51.097656c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8c4.417968 0 8 3.582031 8 8s-3.582032 8-8 8zm0 0",fill:"#f98c96"}),J=n.a.createElement("path",{d:"m408.464844 85.273438v-49.410157l-72 30.863281v77.273438c-11.699219-.113281-21.808594 8.148438-24.023438 19.636719-2.21875 11.488281 4.085938 22.917969 14.984375 27.171875 10.902344 4.25 23.28125.105468 29.425781-9.851563 6.144532-9.953125 4.300782-22.878906-4.386718-30.71875v-40.964843zm-56-8 40-17.136719v14.589843l-40 17.136719zm-16 98.726562c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8c4.417968 0 8 3.582031 8 8s-3.582032 8-8 8zm0 0",fill:"#e4544f"}),L=n.a.createElement("path",{d:"m372.042969 319.160156-7.152344-14.320312 11.574219-5.785156v-41.605469l56-11.210938v54.707031l-20.421875 10.214844-7.152344-14.320312 11.574219-5.785156v-25.292969l-24 4.789062v38.394531zm0 0",fill:"#f98c96"}),U=n.a.createElement("path",{d:"m60.042969 271.160156-7.152344-14.320312 11.574219-5.785156v-32l20.425781-10.214844 7.152344 14.320312-11.578125 5.785156v32zm0 0",fill:"#e4544f"}),$=n.a.createElement("path",{d:"m288.464844 104h16v16h-16zm0 0",fill:"#67c086"}),_=n.a.createElement("path",{d:"m120.464844 152h16v16h-16zm0 0",fill:"#67c086"}),q=n.a.createElement("path",{d:"m376.464844 208h16v16h-16zm0 0",fill:"#67c086"}),K=n.a.createElement("path",{d:"m272.464844 312c0 30.929688-25.070313 56-56 56-30.925782 0-56-25.070312-56-56s25.074218-56 56-56c30.929687 0 56 25.070312 56 56zm0 0",fill:"#5a6470"}),Q=n.a.createElement("path",{d:"m240.464844 312c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0",fill:"#2e3131"}),T=function(e){var t=e.svgRef,a=B(e,["svgRef"]);return n.a.createElement("svg",k({height:"100px",viewBox:"-16 0 464 464",width:"100px",ref:t},a),P,G,M,R,S,V,W,I,X,H,J,L,U,$,_,q,K,Q)},Y=n.a.forwardRef(function(e,t){return n.a.createElement(T,k({svgRef:t},e))});a.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var te=n.a.createElement("g",null),ae=n.a.createElement("g",null),re=n.a.createElement("g",null),ne=n.a.createElement("g",null),le=n.a.createElement("g",null),ce=n.a.createElement("g",null),ie=n.a.createElement("g",null),se=n.a.createElement("g",null),oe=n.a.createElement("g",null),me=n.a.createElement("g",null),he=n.a.createElement("g",null),fe=n.a.createElement("g",null),ue=n.a.createElement("g",null),ge=n.a.createElement("g",null),Ee=n.a.createElement("g",null),de=function(e){var t=e.svgRef,a=ee(e,["svgRef"]);return n.a.createElement("svg",Z({id:"Capa_1",width:"105px",height:"105px",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},a),n.a.createElement("path",{style:{fill:"#D3843D"},d:"M221.288,202.544c-44.917,10.414-78.102,47.104-78.102,90.772c0.043,13.998,3.523,27.77,10.127,40.11c-17.521,18.814-27.336,43.529-27.483,69.233c0,60.39,54.393,109.342,121.492,109.342s121.492-48.952,121.492-109.342c-0.148-25.704-9.962-50.419-27.483-69.233c6.604-12.34,10.084-26.112,10.127-40.11c0-43.668-33.185-80.367-78.102-90.772"}),n.a.createElement("g",null,n.a.createElement("rect",{x:186.576,y:17.356,style:{fill:"#AD6327"},width:26.034,height:17.356}),n.a.createElement("rect",{x:186.576,y:52.068,style:{fill:"#AD6327"},width:26.034,height:17.356}),n.a.createElement("rect",{x:186.576,y:86.78,style:{fill:"#AD6327"},width:26.034,height:17.356}),n.a.createElement("rect",{x:282.034,y:17.356,style:{fill:"#AD6327"},width:26.034,height:17.356}),n.a.createElement("rect",{x:282.034,y:52.068,style:{fill:"#AD6327"},width:26.034,height:17.356}),n.a.createElement("rect",{x:282.034,y:86.78,style:{fill:"#AD6327"},width:26.034,height:17.356})),n.a.createElement("path",{style:{fill:"#FDBD40"},d:"M134.508,199.593c-14.379,0-26.034-11.655-26.034-26.034c0-4.79-3.888-8.678-8.678-8.678s-8.678,3.888-8.678,8.678c0,14.379-11.655,26.034-26.034,26.034c-4.79,0-8.678,3.888-8.678,8.678c0,4.79,3.888,8.678,8.678,8.678c14.379,0,26.034,11.655,26.034,26.034c0,4.79,3.888,8.678,8.678,8.678s8.678-3.888,8.678-8.678c0-14.379,11.655-26.034,26.034-26.034c4.79,0,8.678-3.888,8.678-8.678C143.186,203.481,139.299,199.593,134.508,199.593zM99.797,217.218c-2.525-3.402-5.545-6.422-8.947-8.947c3.402-2.525,6.422-5.545,8.947-8.947c2.525,3.402,5.545,6.422,8.947,8.947C105.342,210.796,102.322,213.816,99.797,217.218z"}),n.a.createElement("path",{style:{fill:"#36AFAD"},d:"M342.78,97.879v67.003h17.356v-19.777l60.746-20.246v22.667h17.356v-81.46L342.78,97.879zM360.136,126.802v-16.41l60.746-20.254v16.419L360.136,126.802z"}),n.a.createElement("rect",{x:195.254,y:442.576,style:{fill:"#9C2D20"},width:104.136,height:34.712}),n.a.createElement("g",null,n.a.createElement("rect",{x:221.288,y:399.186,style:{fill:"#AD6327"},width:52.068,height:43.39}),n.a.createElement("rect",{x:221.288,y:95.458,style:{fill:"#AD6327"},width:52.068,height:199.593})),n.a.createElement("rect",{x:203.932,style:{fill:"#9C2D20"},width:86.78,height:104.136}),n.a.createElement("g",null,n.a.createElement("circle",{style:{fill:"#238892"},cx:351.458,cy:182.237,r:26.034}),n.a.createElement("circle",{style:{fill:"#238892"},cx:429.559,cy:164.881,r:26.034})),n.a.createElement("circle",{style:{fill:"#9C2D20"},cx:247.322,cy:347.119,r:60.746}),n.a.createElement("circle",{style:{fill:"#CEAC9A"},cx:247.322,cy:347.119,r:34.712}),te,ae,re,ne,le,ce,ie,se,oe,me,he,fe,ue,ge,Ee)},pe=(n.a.forwardRef(function(e,t){return n.a.createElement(de,Z({svgRef:t},e))}),a.p,function(){return n.a.createElement("div",null,n.a.createElement(j.a,{className:"mt-3"},n.a.createElement("h1",null,n.a.createElement(Y,null)," Ukulele"),n.a.createElement("h3",{className:"mt-5"},"Notas Mayores"),n.a.createElement(F.a,null,n.a.createElement(w,{data:x.higher.base}),n.a.createElement(w,{data:z.higher.base}),n.a.createElement(w,{data:C.higher.base}),n.a.createElement(w,{data:O.higher.base}),n.a.createElement(w,{data:A.higher.base}),n.a.createElement(w,{data:N.higher.base}),n.a.createElement(w,{data:D.higher.base})),n.a.createElement("h3",{className:"mt-5"},"Notas Menores"),n.a.createElement(F.a,null,n.a.createElement(w,{data:x.minor.base}),n.a.createElement(w,{data:z.minor.base}),n.a.createElement(w,{data:C.minor.base}),n.a.createElement(w,{data:O.minor.base}),n.a.createElement(w,{data:A.minor.base}),n.a.createElement(w,{data:N.minor.base}),n.a.createElement(w,{data:D.minor.base}))))}),ve=a(58),be=a(57);var ye=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ve.a,{bg:"dark",variant:"dark"},n.a.createElement(ve.a.Brand,{href:"#home"},"MusicPedia"),n.a.createElement(be.a,{className:"mr-auto"})),n.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.6a2c3db7.chunk.js.map