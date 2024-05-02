import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as l}from"./index-BBkUAzwr.js";import{I as t}from"./index-BncCFKTc.js";import"./clsx-B-dksMZM.js";const F={title:"Components/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{isFullWidth:!1,islabelAnimationDisabled:!1,label:"Enter Password",value:"",variant:"general",message:"This is a helper message",error:!1,disabled:!1,hideMessage:!1},argTypes:{leftPlaceholder:{control:{disable:!0}},rightPlaceholder:{control:{disable:!0}},value:{control:{disable:!0}},variant:{options:["general","success","warning","error"],control:{type:"select"}},message:{control:{type:"text"}},error:{control:{type:"boolean"}},hideMessage:{control:{type:"boolean"}}}},u={name:"Default Input",args:{label:"Enter name",value:"",message:"This is a helper message"},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,value:s,onChange:n=>r(n.target.value)})})}},i={name:"Disabled Input",args:{label:"Enter name",value:"",message:"This is a helper message",disabled:!0},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,value:s,onChange:n=>r(n.target.value)})})}},o={name:"Success Input",args:{label:"Enter name",value:"",message:"This is a helper message",variant:"success"},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,value:s,onChange:n=>r(n.target.value)})})}},m={name:"Error Input",args:{label:"Enter name",value:"",message:"This is a helper message",variant:"error"},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,value:s,onChange:n=>r(n.target.value)})})}},g={name:"Error Input",args:{label:"Enter name",value:"",message:"This is a helper message",variant:"warning"},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,value:s,onChange:n=>r(n.target.value)})})}},c={name:"Input with Right Placeholder",args:{label:"Enter name",value:"",message:"This is a helper message",rightPlaceholder:"USD"},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,value:s,onChange:n=>r(n.target.value)})})}},d={name:"Label Animation Disabled Input",args:{label:"Enter name",value:"",message:"This is a helper message"},render:a=>{const[s,r]=l.useState("");return e.jsx("div",{className:"theme--light",children:e.jsx(t,{...a,islabelAnimationDisabled:!0,value:s,onChange:n=>r(n.target.value)})})}};var h,v,p;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Default Input",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(p=(v=u.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var b,S,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Disabled Input",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message",
    disabled: true
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,V,x;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Success Input",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message",
    variant: "success"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(x=(V=o.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var D,j,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Error Input",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message",
    variant: "error"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var C,f,N;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Error Input",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message",
    variant: "warning"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(N=(f=g.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var P,A,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Input with Right Placeholder",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message",
    rightPlaceholder: "USD"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var y,R,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Label Animation Disabled Input",
  args: {
    label: "Enter name",
    value: "",
    message: "This is a helper message"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="theme--light">
                <Input {...args} islabelAnimationDisabled value={value} onChange={e => setValue(e.target.value)} />
            </div>;
  }
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const O=["Default","Disabled","Success","Error","Warning","RightPlaceholder","LabelAnimationDisabled"];export{u as Default,i as Disabled,m as Error,d as LabelAnimationDisabled,c as RightPlaceholder,o as Success,g as Warning,O as __namedExportsOrder,F as default};
