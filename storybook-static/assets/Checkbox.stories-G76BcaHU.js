import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{r as l}from"./index-BBkUAzwr.js";import{c as d}from"./clsx-B-dksMZM.js";const i=l.forwardRef(({checked:e=!1,className:s,disabled:a,error:o,label:m,labelClassName:b,wrapperClassName:k,name:t,...n},x)=>r.jsxs("div",{className:d("deriv-checkbox",k),children:[r.jsx("div",{className:"deriv-checkbox__wrapper",children:r.jsx("input",{id:n.id??t,className:d("deriv-checkbox__box",{"deriv-checkbox__box--unchecked":!e,"deriv-checkbox__box--checked":e,"deriv-checkbox__box--disabled":a},s),type:"checkbox",checked:!a&&e,disabled:a,ref:x,name:t,...n})}),r.jsx("label",{className:d("deriv-checkbox__label",{"deriv-checkbox__label--error":o,"deriv-checkbox__label--disabled":a},b),htmlFor:n.id??t,children:m})]}));i.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},checked:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const _={title:"Components/Checkbox",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{disabled:!1,checked:!1,className:"",label:"Get updates about Deriv products, services and events.",onChange:()=>{},wrapperClassName:"",name:"example-checkbox",error:!1},argTypes:{name:{control:{type:"text"}},wrapperClassName:{control:{disable:!0}},className:{control:{disable:!0}},checked:{control:{type:"boolean"}},error:{control:{type:"boolean"}},onChange:{control:{disable:!0}},label:{control:{type:"text"}},disabled:{control:{type:"boolean"}}}},c={name:"Default Checkbox Input",args:{checked:!1,onChange:()=>{},name:"example-checkbox",label:"Get updates about Deriv products, services and events."},render:e=>{const[s,a]=l.useState(e.checked);return l.useEffect(()=>{a(e.checked)},[e.checked]),r.jsx(i,{...e,checked:s,onChange:()=>a(o=>!o)})}};var p,h,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Default Checkbox Input",
  args: {
    checked: false,
    onChange: () => {},
    name: "example-checkbox",
    label: "Get updates about Deriv products, services and events."
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Checkbox {...args} checked={checked} onChange={() => setChecked(previous => !previous)} />;
  }
}`,...(u=(h=c.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const g=["Default"];export{c as Default,g as __namedExportsOrder,_ as default};
