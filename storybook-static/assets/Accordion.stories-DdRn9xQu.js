import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as d}from"./index-BBkUAzwr.js";import{c as n}from"./clsx-B-dksMZM.js";const R="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%209.58579L13.2929%204.29289C13.6834%203.90237%2014.3166%203.90237%2014.7071%204.29289C15.0976%204.68342%2015.0976%205.31658%2014.7071%205.70711L8.70711%2011.7071C8.31659%2012.0976%207.68342%2012.0976%207.2929%2011.7071L1.29289%205.70711C0.902369%205.31658%200.902369%204.68342%201.29289%204.29289C1.68342%203.90237%202.31658%203.90237%202.70711%204.29289L8%209.58579Z'%20fill='%23333333'/%3e%3c/svg%3e",J={bordered:"deriv-accordion--bordered",shadow:"deriv-accordion--shadow",underline:"deriv-accordion--underline"},o=({defaultOpen:r=!1,children:I,isCompact:v=!1,title:g,variant:W="underline"})=>{const[i,D]=d.useState(r),[V,z]=d.useState(r?"auto":"0px"),t=d.useRef(null);d.useEffect(()=>{var h;const M=(h=t==null?void 0:t.current)==null?void 0:h.scrollHeight;z(i?`${M}px`:"0px")},[i]);const F=()=>D(!i);return e.jsxs("div",{className:n("deriv-accordion",J[W],{"deriv-accordion--compact":v}),children:[e.jsxs("button",{className:n("deriv-accordion__header",{"deriv-accordion__header--active":i}),onClick:F,"aria-expanded":i,children:[typeof g=="string"?e.jsx("p",{children:g}):g,e.jsx("img",{src:R,className:n("deriv-accordion__icon",{"deriv-accordion__icon--active":i})})]}),e.jsx("div",{ref:t,style:{maxHeight:V},className:n("deriv-accordion__content",{"deriv-accordion__content--active":i}),children:e.jsx("div",{className:n("deriv-accordion__text",{"deriv-accordion__text--compact":v}),children:I})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"underline" | "bordered" | "shadow"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"shadow"'}]},description:"",defaultValue:{value:'"underline"',computed:!1}}}};const U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2072%2072'%20role='img'%20id='selected_downloadable_icon_id'%20height='120px'%20width='120px'%3e%3cpath%20fill='%23FF444F'%20d='M0%2028C0%2012.536%2012.536%200%2028%200h16c15.464%200%2028%2012.536%2028%2028v16c0%2015.464-12.536%2028-28%2028H28C12.536%2072%200%2059.464%200%2044z'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='m45.167%2014.917-2.321%2013.166h-8.06c-7.518%200-14.684%206.091-16.012%2013.61l-.563%203.2c-1.322%207.518%203.695%2013.61%2011.213%2013.61h6.722c5.48%200%2010.7-4.436%2011.664-9.916L54%2013.497zM39.45%2047.346c-.296%201.692-1.82%203.07-3.513%203.07h-4.084c-3.38%200-5.64-2.743-5.047-6.128l.352-1.996c.6-3.38%203.824-6.128%207.203-6.128h7.06z'%3e%3c/path%3e%3c/svg%3e",G={title:"Components/Accordion",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",defaultOpen:!1,isCompact:!1,title:"What is your return policy?",variant:"underline"},argTypes:{defaultOpen:{control:{type:"boolean"}},variant:{options:["underline","bordered","shadow"],control:{type:"select"}}}},X={width:"800px",color:"var(--du-text-general)"},a={className:"theme--light",style:X},s={args:{variant:"underline"},render:r=>e.jsx("div",{...a,children:e.jsx(o,{...r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},c={args:{variant:"bordered"},render:r=>e.jsx("div",{...a,children:e.jsx(o,{...r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},l={args:{variant:"bordered",title:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("img",{src:U,height:40,width:40}),e.jsx("span",{children:"What is your return policy?"})]})},render:r=>e.jsx("div",{...a,children:e.jsx(o,{...r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},m={args:{variant:"shadow"},render:r=>e.jsx("div",{...a,children:e.jsx(o,{...r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},u={args:{isCompact:!0},render:r=>e.jsx("div",{...a,children:e.jsx(o,{...r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},p={args:{defaultOpen:!0},render:r=>e.jsx("div",{...a,children:e.jsx(o,{...r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "underline"
  },
  render: args => <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,y,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "bordered"
  },
  render: args => <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var _,L,q;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "bordered",
    title: <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
                <img src={DerivBrandLogo} height={40} width={40} />
                <span>What is your return policy?</span>
            </div>
  },
  render: args => <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
}`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var A,C,S;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "shadow"
  },
  render: args => <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,N,O;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isCompact: true
  },
  render: args => <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var E,H,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  render: args => <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
}`,...(T=(H=p.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const K=["Underline","Bordered","BorderedWithIcons","Shadow","Compact","DefaultOpen"];export{c as Bordered,l as BorderedWithIcons,u as Compact,p as DefaultOpen,m as Shadow,s as Underline,K as __namedExportsOrder,G as default};
