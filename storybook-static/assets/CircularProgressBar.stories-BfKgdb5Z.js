import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{c as l}from"./clsx-B-dksMZM.js";import"./index-BBkUAzwr.js";const N=({children:p,className:S,danger_limit:d=20,is_clockwise:D=!1,progress:s=0,radius:e=22,stroke:u=3,warning_limit:P=50})=>{const m=e-u/2,a=m*2*Math.PI,R=a-s/100*a;return r.jsx("div",{className:l("deriv-circular-progress",S),children:r.jsxs("svg",{height:e*2,width:e*2,children:[p&&r.jsx("foreignObject",{x:"0",y:"0",width:e*2,height:e*2,children:r.jsx("div",{className:l("deriv-circular-progress__content"),children:p})}),r.jsx("circle",{className:l("deriv-circular-progress__bar",{"deriv-circular-progress--clockwise":D,"deriv-circular-progress__bar--warning":s<=P&&s>d,"deriv-circular-progress__bar--danger":s<=d}),cx:e,cy:e,fill:"transparent",r:m,strokeDasharray:`${a} ${a}`,strokeWidth:u,style:{strokeDashoffset:R}})]})})};N.__docgenInfo={description:"",methods:[],displayName:"CircularProgressBar",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},danger_limit:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},is_clockwise:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"22",computed:!1}},stroke:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},warning_limit:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const A={title:"Components/CircularProgressBar",component:N,tags:["autodocs"],parameters:{layout:"centered"},args:{progress:50,radius:22,stroke:3,danger_limit:20,warning_limit:50,is_clockwise:!1},argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}},is_clockwise:{options:["true","false"],control:{type:"boolean"}}}},o={args:{progress:50}},i={args:{progress:70,radius:30,stroke:5}},t={args:{progress:60,is_clockwise:!0}},c={args:{progress:30,warning_limit:30}},n={args:{progress:10,danger_limit:20}};var g,f,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    progress: 50
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var _,y,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    progress: 70,
    radius: 30,
    stroke: 5
  }
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,v,h;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    progress: 60,
    is_clockwise: true
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,b,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    progress: 30,
    warning_limit: 30
  }
}`,...(T=(b=c.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var q,W,j;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    progress: 10,
    danger_limit: 20
  }
}`,...(j=(W=n.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const E=["DefaultClockWise","CustomRadiusAndStrokeClockwise","ClockwiseProgress","WarningLimitClockWise","DangerLimitClockWise"];export{t as ClockwiseProgress,i as CustomRadiusAndStrokeClockwise,n as DangerLimitClockWise,o as DefaultClockWise,c as WarningLimitClockWise,E as __namedExportsOrder,A as default};
