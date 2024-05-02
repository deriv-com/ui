import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{c as g}from"./clsx-B-dksMZM.js";import"./index-BBkUAzwr.js";const R=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:[e.jsx("g",{clipPath:"url(#clip0_40941_3479)",children:e.jsx("path",{fill:"#EC3F3F",d:"M7.031.6a1.082 1.082 0 011.937 0l3.366 6.73 3.55 7.102c.36.72-.164 1.568-.969 1.568H1.085a1.083 1.083 0 01-.969-1.568l3.55-7.102L7.031.6zM8 11c.375 0 .687-.29.712-.665l.28-4.095C9.066 5.582 8.602 5 8 5s-1.066.582-.992 1.24l.28 4.095A.714.714 0 008 11zm1 2.012v-.024C9 12.43 8.576 12 8 12c-.575 0-1 .43-1 .989v.023c0 .557.425.988 1 .988.576 0 1-.432 1-.988z"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_40941_3479",children:e.jsx("path",{fill:"#fff",d:"M0 0H16V16H0z"})})})]}),J=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",children:e.jsxs("g",{fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"#2196F3"}),e.jsxs("g",{fill:"#FFF",transform:"translate(6.5 4)",children:[e.jsx("circle",{cx:"1.5",cy:"1",r:"1"}),e.jsx("rect",{width:"2",height:"5",x:"0.5",y:"3",rx:"1"})]})]})}),P=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"#4BB4B3"}),e.jsx("path",{d:"M4.78033 7.84467C4.48744 7.55178 4.01256 7.55178 3.71967 7.84467C3.42678 8.13756 3.42678 8.61244 3.71967 8.90533L5.96967 11.1553C6.26256 11.4482 6.73744 11.4482 7.03033 11.1553L12.2803 5.90533C12.5732 5.61244 12.5732 5.13756 12.2803 4.84467C11.9874 4.55178 11.5126 4.55178 11.2197 4.84467L6.5 9.56434L4.78033 7.84467Z",fill:"white"})]}),X=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",children:e.jsx("path",{fill:"#FFAD3A",d:"M8 0a8 8 0 110 16A8 8 0 018 0zm0 10.7c-.4 0-.7.1-1 .4-.2.2-.3.5-.3.9s.1.7.4 1c.2.2.5.3.9.3s.7-.1 1-.4c.2-.2.3-.5.3-.9s-.1-.7-.4-1c-.2-.2-.5-.3-.9-.3zm1.2-7.4c-.3-.5-.9-.7-1.5-.6-.6.2-1 .7-1 1.3v1L7 9.3c0 .5.5.8 1 .8.6 0 1-.4 1-.8v-.9l.2-2.6.1-1.8v-.6z"})});R.__docgenInfo={description:"",methods:[],displayName:"ErrorIcon"};J.__docgenInfo={description:"",methods:[],displayName:"InfoIcon"};P.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};X.__docgenInfo={description:"",methods:[],displayName:"WarningIcon"};const Q={error:e.jsx(R,{}),info:e.jsx(J,{}),success:e.jsx(P,{}),warning:e.jsx(X,{})},p={error:{filled:"deriv-inline-message__error--filled",outlined:"deriv-inline-message__error--outlined"},general:"deriv-inline-message__general",info:{filled:"deriv-inline-message__info--filled",outlined:"deriv-inline-message__info--outlined"},success:{filled:"deriv-inline-message__success--filled",outlined:"deriv-inline-message__success--outlined"},warning:{filled:"deriv-inline-message__warning--filled",outlined:"deriv-inline-message__warning--outlined"}},Z=({icon:m,iconPosition:u="center",children:k,className:G,variant:n="general",type:K="filled"})=>e.jsxs("div",{className:g("deriv-inline-message",n!=="general"?p[n][K]:p[n],G),children:[(n!=="general"||m)&&e.jsx("div",{className:g("deriv-inline-message__icon",{"deriv-inline-message__icon--top":u==="top","deriv-inline-message__icon--center":u==="center","deriv-inline-message__icon--bottom":u==="bottom"}),children:n!=="general"?Q[n]:m??null}),k]});Z.__docgenInfo={description:"",methods:[],displayName:"InlineMessage",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"top" | "center" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"warning" | "info" | "success" | "error" | "general"',elements:[{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"general"'}]},description:"",defaultValue:{value:'"general"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"outlined" | "filled"',elements:[{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}}}};const ee={title:"Components/InlineMessage",component:Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"}},icon:{disable:!0},className:{disable:!0},variant:{control:{type:"select"},defaultValue:"general",options:["warning","info","success","error","general"]},type:{control:{type:"select"},defaultValue:"filled",options:["outlined","filled"]}}},s={name:"Default Inline Message",args:{variant:"general",type:"outlined",children:"This is a default inline message"}},i={name:"Warning filled Inline Message",args:{variant:"warning",children:"This is a default inline message"}},a={name:"Warning outlined Inline Message",args:{variant:"warning",type:"outlined",children:"This is a default inline message"}},r={name:"Info filled Inline Message",args:{variant:"info",children:"This is a default inline message"}},l={name:"Info outlined Inline Message",args:{variant:"info",type:"outlined",children:"This is a default inline message"}},t={name:"Success filled Inline Message",args:{variant:"success",children:"This is a default inline message"}},o={name:"Success outlined Inline Message",args:{variant:"success",type:"outlined",children:"This is a default inline message"}},c={name:"Error filled Inline Message",args:{variant:"error",children:"This is a default inline message"}},d={name:"Error outlined Inline Message",args:{variant:"error",type:"outlined",children:"This is a default inline message"}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Default Inline Message",
  args: {
    variant: "general",
    type: "outlined",
    children: "This is a default inline message"
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,_,x;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Warning filled Inline Message",
  args: {
    variant: "warning",
    children: "This is a default inline message"
  }
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var w,y,M;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Warning outlined Inline Message",
  args: {
    variant: "warning",
    type: "outlined",
    children: "This is a default inline message"
  }
}`,...(M=(y=a.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var j,T,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Info filled Inline Message",
  args: {
    variant: "info",
    children: "This is a default inline message"
  }
}`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var F,E,C;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Info outlined Inline Message",
  args: {
    variant: "info",
    type: "outlined",
    children: "This is a default inline message"
  }
}`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var N,W,O;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Success filled Inline Message",
  args: {
    variant: "success",
    children: "This is a default inline message"
  }
}`,...(O=(W=t.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var V,z,b;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Success outlined Inline Message",
  args: {
    variant: "success",
    type: "outlined",
    children: "This is a default inline message"
  }
}`,...(b=(z=o.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var q,L,B;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Error filled Inline Message",
  args: {
    variant: "error",
    children: "This is a default inline message"
  }
}`,...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var D,A,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Error outlined Inline Message",
  args: {
    variant: "error",
    type: "outlined",
    children: "This is a default inline message"
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const ne=["Default","WarningFilled","WarningOutlined","InfoFilled","InfoOutlined","SuccessFilled","SuccessOutlined","ErrorFilled","ErrorOutlined"];export{s as Default,c as ErrorFilled,d as ErrorOutlined,r as InfoFilled,l as InfoOutlined,t as SuccessFilled,o as SuccessOutlined,i as WarningFilled,a as WarningOutlined,ne as __namedExportsOrder,ee as default};
