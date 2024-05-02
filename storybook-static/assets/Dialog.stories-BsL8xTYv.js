import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{B as a}from"./index-3NkZiTYH.js";import{r}from"./index-BBkUAzwr.js";import{c as W}from"./clsx-B-dksMZM.js";import{M as t}from"./index-DhbGtWfQ.js";import{T as V}from"./index-CY68ihkp.js";import"./index-CzmRjn8P.js";import"./index-PqR-_bA4.js";import"./index-_4_hgnnR.js";const P=({children:s,className:l,hideCloseIcon:n=!0,textClassName:_,...T})=>e.jsx(t.Header,{hideBorder:!0,hideCloseIcon:n,className:l,...T,children:e.jsx(V,{as:"div",weight:"bold",className:_,children:s})});P.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{hideCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},textClassName:{required:!1,tsType:{name:"string"},description:""}}};const M=({children:s,className:l,...n})=>e.jsx(t.Body,{className:l,...n,children:s});M.__docgenInfo={description:"",methods:[],displayName:"DialogBody"};const w=({className:s,children:l,...n})=>e.jsx(t.Footer,{hideBorder:!0,className:s,...n,children:l});w.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};const o=({children:s,className:l,...n})=>e.jsx(t,{className:W("deriv-dialog",l),ariaHideApp:!1,...n,children:s});o.Header=P;o.Body=M;o.Footer=w;o.setAppElement=t.setAppElement;o.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, className, hideCloseIcon = true, textClassName,...rest }: TDialogHeaderProps",optional:!1,type:{name:"intersection",raw:`Omit<React.ComponentProps<typeof Modal.Header>,"hideBorder"> & {
    hideCloseIcon?: boolean;
    textClassName?: string
}`,elements:[{name:"Omit",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Modal.Header>",elements:[{name:"Modal.Header"}]},{name:"literal",value:'"hideBorder"'}],raw:'Omit<React.ComponentProps<typeof Modal.Header>,"hideBorder">'},{name:"signature",type:"object",raw:`{
    hideCloseIcon?: boolean;
    textClassName?: string
}`,signature:{properties:[{key:"hideCloseIcon",value:{name:"boolean",required:!1}},{key:"textClassName",value:{name:"string",required:!1}}]}}],alias:"TDialogHeaderProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className,...rest }: React.ComponentProps<typeof Modal.Body>",optional:!1,type:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Modal.Body>",elements:[{name:"Modal.Body"}],alias:"React.ComponentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ className, children,...rest }: React.ComponentProps<typeof Modal.Footer>",optional:!1,type:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Modal.Footer>",elements:[{name:"Modal.Footer"}],alias:"React.ComponentProps"}}],returns:null}],displayName:"Dialog",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const Z={title:"Components/Dialog",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{children:e.jsx(a,{children:"Open Dialog"}),isOpen:!1,onRequestClose:()=>{}},argTypes:{children:{description:"The content of the Dialog.you can use the `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer` components to structure the content of the Dialog.",control:!1},isOpen:{description:"controls the visibility of the Dialog",control:{type:"boolean"}},onRequestClose:{description:"Callback function to close the Dialog",control:!1},ariaHideApp:{description:"Boolean indicating if the appElement should be hidden. check this link for more details: https://reactcommunity.org/react-Dialog/accessibility/",control:{type:"boolean"}},style:{description:"overrides the default styles for b oth Dialog content and overlay, divided into overlay and content styles.",control:!1}}},i={name:"Default Dialog",args:{isOpen:!1,ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),shouldCloseOnEsc:!1,children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(a,{color:"black",children:"cancel"}),e.jsx(a,{children:"ok"})]})]})]})}},c={name:"Disable Overlay",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!1},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),style:{overlay:{backgroundColor:"none"}},children:[e.jsx(o.Header,{hideCloseIcon:!1,onRequestClose:()=>n(!1),children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(a,{color:"black",children:"cancel"}),e.jsx(a,{children:"ok"})]})]})]})}},d={name:"Show Close Icon",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),children:[e.jsx(o.Header,{hideCloseIcon:!1,children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(a,{color:"black",children:"cancel"}),e.jsx(a,{children:"ok"})]})]})]})}},p={name:"Hide Header",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),children:[e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(a,{color:"black",children:"cancel"}),e.jsx(a,{children:"ok"})]})]})]})}},u={name:"Hide Footer",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"})]})]})}},O={name:"Close Dialog when Click on Close Icon",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),children:[e.jsx(o.Header,{hideCloseIcon:!1,onRequestClose:()=>n(!1),children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{hideBorder:!0,children:[e.jsx(a,{color:"black",children:"cancel"}),e.jsx(a,{children:"ok"})]})]})]})}},C={name:"Disable ESC Button",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:s=>{const[l,n]=r.useState(s.isOpen);return r.useEffect(()=>{n(s.isOpen)},[s.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(o,{...s,isOpen:l,shouldCloseOnOverlayClick:s.shouldCloseOnOverlayClick,onRequestClose:()=>n(!1),shouldCloseOnEsc:!1,children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{hideBorder:!0,children:[e.jsx(a,{color:"black",children:"cancel"}),e.jsx(a,{children:"ok"})]})]})]})}};var g,h,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Default Dialog",
  args: {
    isOpen: false,
    ariaHideApp: false,
    shouldCloseOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)} shouldCloseOnEsc={false}>
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>;
  }
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,y,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Disable Overlay",
  args: {
    isOpen: false,
    onRequestClose: () => {},
    ariaHideApp: false,
    shouldCloseOnOverlayClick: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)} style={{
        overlay: {
          backgroundColor: 'none'
        }
      }}>
                <Dialog.Header hideCloseIcon={false} onRequestClose={() => setIsOpen(false)}>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>;
  }
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var k,B,x;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Show Close Icon",
  args: {
    isOpen: false,
    onRequestClose: () => {},
    ariaHideApp: false,
    shouldCloseOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Dialog.Header hideCloseIcon={false}>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>;
  }
}`,...(x=(B=d.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var H,j,I;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Hide Header",
  args: {
    isOpen: false,
    onRequestClose: () => {},
    ariaHideApp: false,
    shouldCloseOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>;
  }
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var v,b,R;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Hide Footer",
  args: {
    isOpen: false,
    onRequestClose: () => {},
    ariaHideApp: false,
    shouldCloseOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
            </Dialog>
            </>;
  }
}`,...(R=(b=u.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var F,q,E;O.parameters={...O.parameters,docs:{...(F=O.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Close Dialog when Click on Close Icon",
  args: {
    isOpen: false,
    onRequestClose: () => {},
    ariaHideApp: false,
    shouldCloseOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Dialog.Header hideCloseIcon={false} onRequestClose={() => setIsOpen(false)}>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>;
  }
}`,...(E=(q=O.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,N,A;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Disable ESC Button",
  args: {
    isOpen: false,
    onRequestClose: () => {},
    ariaHideApp: false,
    shouldCloseOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)} shouldCloseOnEsc={false}>
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>;
  }
}`,...(A=(N=C.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const $=["Default","DialogWithoutOverlay","HideHeaderCloseIcon","NoHeader","NoFooter","HeaderCloseIconHandler","DisableEscButton"];export{i as Default,c as DialogWithoutOverlay,C as DisableEscButton,O as HeaderCloseIconHandler,d as HideHeaderCloseIcon,u as NoFooter,p as NoHeader,$ as __namedExportsOrder,Z as default};
