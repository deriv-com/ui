import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as _}from"./index-BBkUAzwr.js";import{c as n}from"./clsx-B-dksMZM.js";const c={general:"deriv-helper-message--general",success:"deriv-helper-message--success",warning:"deriv-helper-message--warning",error:"deriv-helper-message--error"},m=({error:l,message:a,variant:r="general",disabled:s})=>e.jsx("p",{className:n("deriv-helper-message",{[c.general]:s,[c[l?"error":r]]:!s}),children:a}),N=m;m.__docgenInfo={description:`HelperMessage component
@component
@param {HelperMessageProps} props - The props that define the HelperMessage.
@returns {ReactNode} The React Node that represents the HelperMessage.

@example
<HelperMessage
  error={false}
  message="This is a helper message"
  variant="general"
  disabled={false}
/>`,methods:[],displayName:"HelperMessage",props:{error:{required:!1,tsType:{name:"boolean"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "general"
| "success"
| "error"
| "warning"
| "disabled"`,elements:[{name:"literal",value:'"general"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"general"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const T={general:"deriv-input--general",success:"deriv-input--success",warning:"deriv-input--general",error:"deriv-input--error",disabled:"deriv-input--disabled"},x={general:"deriv-input__label--general",success:"deriv-input__label--success",warning:"deriv-input__label--general",error:"deriv-input__label--error",disabled:"deriv-input__label--disabled"},y=_.forwardRef(({className:l,disabled:a,error:r,hideMessage:s,id:t,isFullWidth:g=!1,islabelAnimationDisabled:v=!1,label:d,leftPlaceholder:p,message:o,rightPlaceholder:u,variant:i="general",wrapperClassName:f,...h},b)=>e.jsxs("div",{className:n("deriv-input__container",{"deriv-input__container--full":g},f),children:[e.jsxs("div",{className:n("deriv-input",l,T[r?"error":i],{"deriv-input--disabled":a}),children:[p&&e.jsx("div",{className:"deriv-input__left-content",children:p}),e.jsx("input",{placeholder:d,className:v?"deriv-input--label-animation-disabled":"deriv-input__field",id:t,disabled:a,ref:b,...h}),e.jsx("label",{className:n("deriv-input__label",x[r?"error":i],{"deriv-input--label--disabled":a}),htmlFor:t,children:d}),u&&e.jsx("div",{className:"deriv-input__right-content",children:u})]}),!s&&o&&e.jsx("div",{className:"deriv-input__helper-message",children:e.jsx(N,{message:o,variant:i,error:r,disabled:a})})]}));y.__docgenInfo={description:`@example
<Input
  label="First Name"
  variant="general"
  message="First name is required"
  wrapperClassName="custom-input-wrapper"
  isFullWidth={true}
/>`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},islabelAnimationDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftPlaceholder:{required:!1,tsType:{name:"ReactNode"},description:""},rightPlaceholder:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "general"
| "success"
| "error"
| "warning"
| "disabled"`,elements:[{name:"literal",value:'"general"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"general"',computed:!1}},message:{required:!1,tsType:{name:"ReactNode"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},hideMessage:{required:!1,tsType:{name:"boolean"},description:""},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{y as I};
