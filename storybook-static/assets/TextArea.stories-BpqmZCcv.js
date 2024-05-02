import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as d}from"./index-BBkUAzwr.js";import{c as W}from"./clsx-B-dksMZM.js";import{T as p}from"./index-CY68ihkp.js";const l=d.forwardRef(({hint:a,isInvalid:e=!1,label:n,maxLength:r,textSize:h,shouldShowCounter:D=!1,value:s,onChange:x,...w},y)=>{const q=i=>{r&&i.target.value.length>r&&(i.target.value=i.target.value.slice(0,r)),x&&x(i)};return t.jsxs("div",{className:W("deriv-textarea",{"deriv-textarea--error":e}),children:[t.jsx("textarea",{"data-has-value":!!s,value:s,onChange:q,ref:y,...w}),n&&t.jsx("label",{children:t.jsx(p,{color:e?"error":"less-prominent",size:h,children:n})}),t.jsxs("div",{className:"deriv-textarea__footer",children:[a&&t.jsx(p,{as:"p",color:e?"error":"less-prominent",size:h,children:a}),D&&t.jsxs(p,{color:e?"error":"less-prominent",size:h,children:[(s==null?void 0:s.length)??0,"/",r]})]})]})});l.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{hint:{required:!1,tsType:{name:"string"},description:""},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},textSize:{required:!0,tsType:{name:"Extract",elements:[{name:"union",raw:`| "2xl"
| "2xs"
| "3xl"
| "3xs"
| "4xl"
| "5xl"
| "6xl"
| "lg"
| "md"
| "sm"
| "xl"
| "xs"`,elements:[{name:"literal",value:'"2xl"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"3xs"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},{name:"union",raw:'"lg" | "md" | "sm"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]}],raw:'Extract<TGenericSizes, "lg" | "md" | "sm">'},description:""},shouldShowCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Components/TextArea",component:l,args:{label:"Description",hint:"This is a hint for the user"}},o={args:{label:"Description",hint:"This is a hint for the user",textSize:"sm"},render:a=>{const[e,n]=d.useState("");return t.jsx(l,{...a,value:e,onChange:r=>n(r.target.value)})}},u={args:{label:"Description",hint:"This is an error hint",isInvalid:!0,textSize:"sm"}},m={args:{label:"Description",hint:"This is a counter hint",maxLength:100,shouldShowCounter:!0,textSize:"sm"},render:a=>{const[e,n]=d.useState("");return t.jsx(l,{...a,value:e,onChange:r=>n(r.target.value)})}},c={args:{label:"Description",hint:"This is an error and counter hint",maxLength:100,isInvalid:!0,shouldShowCounter:!0,textSize:"sm"},render:a=>{const[e,n]=d.useState("");return t.jsx(l,{...a,value:e,onChange:r=>n(r.target.value)})}};var g,v,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Description",
    hint: "This is a hint for the user",
    textSize: "sm"
  },
  render: args => {
    const [currentValue, setCurrentValue] = useState('');
    return <TextArea {...args} value={currentValue} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentValue(e.target.value)} />;
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,C,S;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Description",
    hint: "This is an error hint",
    isInvalid: true,
    textSize: "sm"
  }
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,V,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Description",
    hint: "This is a counter hint",
    maxLength: 100,
    shouldShowCounter: true,
    textSize: "sm"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <TextArea {...args} value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} />;
  }
}`,...(b=(V=m.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var j,z,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Description",
    hint: "This is an error and counter hint",
    maxLength: 100,
    isInvalid: true,
    shouldShowCounter: true,
    textSize: "sm"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <TextArea {...args} value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} />;
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const M=["Default","WithError","WithCounter","WithErrorAndCounter"];export{o as Default,m as WithCounter,u as WithError,c as WithErrorAndCounter,M as __namedExportsOrder,H as default};
