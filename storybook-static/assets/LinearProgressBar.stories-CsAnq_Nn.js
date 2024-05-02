import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{R as h}from"./index-BBkUAzwr.js";import{c as j}from"./clsx-B-dksMZM.js";import{T as y}from"./index-CY68ihkp.js";const v=({danger_limit:n,is_loading:_,label:b,percentage:a,labelSize:f="xs",warning_limit:i,...L})=>e.jsx("div",{className:"deriv-linear-progress-bar",...L,children:e.jsxs(h.Fragment,{children:[e.jsx(y,{size:f,className:"deriv-linear-progress-bar__remaining-time",children:b}),_||a<1?e.jsx("div",{className:"deriv-linear-progress-bar__infinite-loader",children:e.jsx("div",{className:"deriv-linear-progress-bar__infinite-loader--indeterminate"})}):e.jsx("div",{className:"deriv-linear-progress-bar__track",children:e.jsx("div",{className:j("deriv-linear-progress-bar__line",{"deriv-linear-progress-bar__line--green":a>=i,"deriv-linear-progress-bar__line--yellow":a<i&&a>=n,"deriv-linear-progress-bar__line--red":a<n}),style:{width:`${a}%`}})})]})});v.__docgenInfo={description:"",methods:[],displayName:"LinearProgressBar",props:{danger_limit:{required:!0,tsType:{name:"number"},description:""},is_loading:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},percentage:{required:!0,tsType:{name:"number"},description:""},labelSize:{required:!1,tsType:{name:"Extract",elements:[{name:"union",raw:`| "2xl"
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
| "xs"`,elements:[{name:"literal",value:'"2xl"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"3xs"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},{name:"union",raw:'"lg" | "md" | "sm" | "xs"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]}],raw:'Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">'},description:"",defaultValue:{value:'"xs"',computed:!1}},warning_limit:{required:!0,tsType:{name:"number"},description:""}}};const S={title:"Components/LinearProgressBar",component:v},r={args:{danger_limit:20,is_loading:!1,label:"Loading...",percentage:50,labelSize:"xs",warning_limit:80}},s={args:{...r.args,is_loading:!0}},l={args:{...r.args,label:e.jsx("span",{children:"Custom Label"})}};var t,o,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    danger_limit: 20,
    is_loading: false,
    label: 'Loading...',
    percentage: 50,
    labelSize: 'xs',
    warning_limit: 80
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,u,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    is_loading: true
  }
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,g,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: <span>Custom Label</span>
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const q=["Default","Loading","WithCustomLabel"];export{r as Default,s as Loading,l as WithCustomLabel,q as __namedExportsOrder,S as default};
