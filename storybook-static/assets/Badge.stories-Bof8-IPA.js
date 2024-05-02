import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{r as me}from"./index-BBkUAzwr.js";import{c as ce}from"./clsx-B-dksMZM.js";import{T as ue}from"./index-CY68ihkp.js";const ge={contained:"deriv-badge__variant--contained",bordered:"deriv-badge__variant--bordered"},pe={tight:"deriv-badge__size--tight",loose:"deriv-badge__size--loose"},ve={blue:"deriv-badge__color--blue","light-blue":"deriv-badge__color--lightblue",general:"deriv-badge__color--general",purple:"deriv-badge__color--purple",success:"deriv-badge__color--success",warning:"deriv-badge__color--warning",danger:"deriv-badge__color--danger",gold:"deriv-badge__color--gold",green:"deriv-badge__color--green"},xe={lg:"deriv-badge__padding--lg",md:"deriv-badge__padding--md",sm:"deriv-badge__padding--sm",xs:"deriv-badge__padding--xs"},be={lg:"deriv-badge__rounded--lg",md:"deriv-badge__rounded--md",sm:"deriv-badge__rounded--sm"},_e={lg:"lg",md:"md",sm:"sm",xs:"xs"},$=me.forwardRef(({children:p,className:ee,color:ae="general",isBold:v=!1,leftIcon:re,padding:ne="tight",rightIcon:le,rounded:se="sm",badgeSize:x="md",textSize:oe,variant:de="contained",...te},ie)=>a.jsx(a.Fragment,{children:a.jsxs("div",{ref:ie,className:ce("deriv-badge",ge[de],ve[ae],pe[ne],xe[x],be[se],{"deriv-badge__variant--bold-text":v},ee),...te,children:[re,p&&a.jsx(ue,{align:"center",size:oe??_e[x],weight:v?"bold":"normal",as:"span",children:p}),le]})}));$.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{badgeSize:{required:!1,tsType:{name:"Extract",elements:[{name:"union",raw:`| "2xl"
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
| "xs"`,elements:[{name:"literal",value:'"2xl"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"3xs"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},{name:"union",raw:'"lg" | "md" | "sm" | "xs"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]}],raw:'Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">'},description:"",defaultValue:{value:'"md"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:`| "blue"
| "light-blue"
| "general"
| "purple"
| "success"
| "warning"
| "danger"
| "gold"
| "green"`,elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"light-blue"'},{name:"literal",value:'"general"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"gold"'},{name:"literal",value:'"green"'}]},description:"",defaultValue:{value:'"general"',computed:!1}},isBold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rightIcon:{required:!1,tsType:{name:"ReactElement"},description:""},leftIcon:{required:!1,tsType:{name:"ReactElement"},description:""},padding:{required:!1,tsType:{name:"union",raw:'"tight" | "loose"',elements:[{name:"literal",value:'"tight"'},{name:"literal",value:'"loose"'}]},description:"",defaultValue:{value:'"tight"',computed:!1}},rounded:{required:!1,tsType:{name:"Extract",elements:[{name:"union",raw:`| "2xl"
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
| "xs"`,elements:[{name:"literal",value:'"2xl"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"3xs"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},{name:"union",raw:'"lg" | "md" | "sm"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]}],raw:'Extract<TGenericSizes, "lg" | "md" | "sm">'},description:"",defaultValue:{value:'"sm"',computed:!1}},textSize:{required:!1,tsType:{name:'ComponentProps["size"]',raw:'ComponentProps<typeof Text>["size"]'},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "bordered"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"bordered"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}}},composes:["ComponentProps"]};const e={title:"Components/Badge",component:$,parameters:{layout:"centered"},tags:["autodocs"],args:{variant:"contained",children:"label",color:"light-blue",badgeSize:"md",isBold:!0,rightIcon:a.jsx("span",{children:"👉"}),rounded:"sm",leftIcon:a.jsx("span",{children:"👈"}),padding:"tight",textSize:void 0},argTypes:{variant:{options:["contained","bordered"]},color:{options:["primary","blue","purple","success","danger","warning"]}}},r={args:{variant:"contained",children:"Click me!",isBold:!0}},n={args:{variant:"bordered",children:"Badge",isBold:!0,padding:"loose"}},l={name:"Contained (Success)",args:{...e.args}},s={name:"Contained (General)",args:{...e.args,color:"general"}},o={name:"Contained (Round-lg)",args:{...e.args,color:"general",rounded:"lg"}},d={name:"Contained (Yellow)",args:{...e.args,color:"danger",padding:"loose"}},t={name:"Contained (Gold)",args:{...e.args,color:"gold",padding:"loose"}},i={name:"Contained (Yellow)",args:{...e.args,color:"warning",padding:"loose"}},m={name:"Outlined (Primary)",args:{...e.args,variant:"bordered"}},c={name:"Outlined (Success)",args:{...e.args,variant:"bordered",color:"success"}},u={name:"Outlined (Yellow)",args:{...e.args,variant:"bordered",color:"warning"}},g={name:"Outlined (Red)",args:{...e.args,variant:"bordered",color:"danger"}};var b,_,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    children: "Click me!",
    isBold: true
  }
}`,...(f=(_=r.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var C,w,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "bordered",
    children: "Badge",
    isBold: true,
    padding: "loose"
  }
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var S,y,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Contained (Success)",
  args: {
    ...meta.args
  }
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var R,T,B;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Contained (General)",
  args: {
    ...meta.args,
    color: "general"
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var P,z,q;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Contained (Round-lg)",
  args: {
    ...meta.args,
    color: "general",
    rounded: "lg"
  }
}`,...(q=(z=o.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var Y,E,G;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Contained (Yellow)",
  args: {
    ...meta.args,
    color: "danger",
    padding: "loose"
  }
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var V,j,I;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Contained (Gold)",
  args: {
    ...meta.args,
    color: "gold",
    padding: "loose"
  }
}`,...(I=(j=t.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var N,k,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Contained (Yellow)",
  args: {
    ...meta.args,
    color: "warning",
    padding: "loose"
  }
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var A,D,H;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Outlined (Primary)",
  args: {
    ...meta.args,
    variant: "bordered"
  }
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,K,L;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Outlined (Success)",
  args: {
    ...meta.args,
    variant: "bordered",
    color: "success"
  }
}`,...(L=(K=c.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,Q,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Outlined (Yellow)",
  args: {
    ...meta.args,
    variant: "bordered",
    color: "warning"
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Outlined (Red)",
  args: {
    ...meta.args,
    variant: "bordered",
    color: "danger"
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Se=["Contained","Outlined","ContainedPrimary","ContainedPurple","ContainedPurpleRounded","ContainedRed","ContainedGold","ContainedYellow","OutlinedPrimary","OutlinedSuccess","OutlinedYellow","OutlinedRed"];export{r as Contained,t as ContainedGold,l as ContainedPrimary,s as ContainedPurple,o as ContainedPurpleRounded,d as ContainedRed,i as ContainedYellow,n as Outlined,m as OutlinedPrimary,g as OutlinedRed,c as OutlinedSuccess,u as OutlinedYellow,Se as __namedExportsOrder,e as default};
