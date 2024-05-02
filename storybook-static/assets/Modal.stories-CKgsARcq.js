import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{B as l}from"./index-3NkZiTYH.js";import{r}from"./index-BBkUAzwr.js";import{M as o}from"./index-DhbGtWfQ.js";import"./clsx-B-dksMZM.js";import"./index-CzmRjn8P.js";import"./index-CY68ihkp.js";import"./index-PqR-_bA4.js";import"./index-_4_hgnnR.js";const Z={title:"Components/Modal",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{children:e.jsx(l,{children:"Open Modal"}),isOpen:!1,onRequestClose:()=>{}},argTypes:{children:{description:"The content of the modal.you can use the `Modal.Header`, `Modal.Body`, and `Modal.Footer` components to structure the content of the modal.",control:!1},isOpen:{description:"controls the visibility of the modal",control:{type:"boolean"}},onRequestClose:{description:"Callback function to close the modal",control:!1},ariaHideApp:{description:"Boolean indicating if the appElement should be hidden. check this link for more details: https://reactcommunity.org/react-modal/accessibility/",control:{type:"boolean"}},style:{description:"overrides the default styles for b oth modal content and overlay, divided into overlay and content styles.",control:!1}}},t={name:"Default Modal",args:{isOpen:!1,ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),shouldCloseOnEsc:!1,children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},d={name:"Disable Overlay",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!1},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),style:{overlay:{backgroundColor:"none"}},children:[e.jsx(o.Header,{onRequestClose:()=>s(!1),children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},i={name:"Hide Close Icon",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),children:[e.jsx(o.Header,{hideCloseIcon:!0,children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},c={name:"Hide Header",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),children:[e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},u={name:"Hide Header Border",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),children:[e.jsx(o.Header,{hideBorder:!0,children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},O={name:"Hide Footer",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"})]})]})}},p={name:"Hide Footer Border",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{hideBorder:!0,children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},C={name:"Close Modal when Click on Close Icon",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),children:[e.jsx(o.Header,{onRequestClose:()=>s(!1),children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{hideBorder:!0,children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}},h={name:"Disable ESC Button",args:{isOpen:!1,onRequestClose:()=>{},ariaHideApp:!1,shouldCloseOnOverlayClick:!0},render:n=>{const[a,s]=r.useState(n.isOpen);return r.useEffect(()=>{s(n.isOpen)},[n.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(o,{...n,isOpen:a,shouldCloseOnOverlayClick:n.shouldCloseOnOverlayClick,onRequestClose:()=>s(!1),shouldCloseOnEsc:!1,children:[e.jsx(o.Header,{children:"title"}),e.jsx(o.Body,{children:"body"}),e.jsxs(o.Footer,{hideBorder:!0,children:[e.jsx(l,{color:"black",children:"cancel"}),e.jsx(l,{children:"ok"})]})]})]})}};var f,y,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Default Modal",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)} shouldCloseOnEsc={false}>
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var B,M,m;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)} style={{
        overlay: {
          backgroundColor: 'none'
        }
      }}>
                <Modal.Header onRequestClose={() => setIsOpen(false)}>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(m=(M=d.parameters)==null?void 0:M.docs)==null?void 0:m.source}}};var x,j,H;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Hide Close Icon",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Modal.Header hideCloseIcon>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(H=(j=i.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var v,g,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(I=(g=c.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var b,F,R;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Hide Header Border",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Modal.Header hideBorder>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,E,S;O.parameters={...O.parameters,docs:{...(q=O.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
            </Modal>
            </>;
  }
}`,...(S=(E=O.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var A,D,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Hide Footer Border",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var w,T,W;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Close Modal when Click on Close Icon",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)}>
                <Modal.Header onRequestClose={() => setIsOpen(false)}>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(W=(T=C.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,z,G;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick} onRequestClose={() => setIsOpen(false)} shouldCloseOnEsc={false}>
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>;
  }
}`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const $=["Default","ModalWithoutOverlay","HideHeaderCloseIcon","NoHeader","NoHeaderBorder","NoFooter","NoFooterBorder","HeaderCloseIconHandler","DisableEscButton"];export{t as Default,h as DisableEscButton,C as HeaderCloseIconHandler,i as HideHeaderCloseIcon,d as ModalWithoutOverlay,O as NoFooter,p as NoFooterBorder,c as NoHeader,u as NoHeaderBorder,$ as __namedExportsOrder,Z as default};
