import React from 'react'
import ReactDOM from 'react-dom/client'
import {VerticalTab,VerticalTabItems} from '../dist/components/VerticalTab'
import { MyComponent } from './Dropdowntest'

import './style.scss'

const Icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_27043_25468)">
        <path d="M4.5 1.09913e-05C5.69429 -0.00262961 6.84043 0.470621 7.68492 1.31511C8.16189 1.79208 8.52043 2.36527 8.74169 2.98902H12.5C13.8807 2.98902 15 4.10831 15 5.48902V8.2676C15.5978 8.61341 16 9.25975 16 10V12C16 12.7467 15.5908 13.3979 14.9844 13.7414C14.8448 14.9947 13.7858 16 12.5 16H2.54C1.15929 16 0.00312805 14.8407 0.00312805 13.46V5.00003H0.0274644C0.00931666 4.83587 0 4.66904 0 4.50003C0 2.01475 2.01472 1.09913e-05 4.5 1.09913e-05ZM12.5 3.98902H8.972C8.99095 4.15786 9.00039 4.32845 9.00001 4.50003C9.00001 6.98531 6.98528 9.00003 4.5 9.00003C3.08815 9.00003 1.82816 8.34985 1.00313 7.33256V13.46C1.00313 14.2885 1.71157 15 2.54 15H12.5C13.1401 15 13.6865 14.5753 13.9019 14H11C9.89543 14 9 13.1046 9 12V10C9 8.89546 9.89543 8.00003 11 8.00003H14V5.48902C14 4.66059 13.3284 3.98902 12.5 3.98902ZM14 9.00003H11C10.4477 9.00003 10 9.44775 10 10V12C10 12.5523 10.4477 13 11 13H14C14.5523 13 15 12.5523 15 12V10C15 9.44775 14.5523 9.00003 14 9.00003ZM12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10ZM4.5 1.00003C2.567 1.00003 1 2.56704 1 4.50003C1 6.43303 2.567 8.00003 4.5 8.00003C6.433 8.00003 8 6.43303 8 4.50003C8 2.56704 6.433 1.00003 4.5 1.00003ZM4.5 2.50003C4.77614 2.50003 5 2.72389 5 3.00003V4L6 4.00003C6.24546 4.00003 6.44961 4.17691 6.49194 4.41016L6.5 4.50003C6.5 4.77618 6.27614 5.00003 6 5.00003L5 5V6.00003C5 6.24549 4.82312 6.44964 4.58988 6.49198L4.5 6.50003C4.22386 6.50003 4 6.27618 4 6.00003V5L3 5.00003C2.75454 5.00003 2.55039 4.82316 2.50806 4.58991L2.5 4.50003C2.5 4.22389 2.72386 4.00003 3 4.00003L4 4V3.00003C4 2.75457 4.17688 2.55042 4.41012 2.50809L4.5 2.50003Z" fill="#333333" />
    </g>
    <defs>
        <clipPath id="clip0_27043_25468">
            <rect width="16" height="16" fill="white" />
        </clipPath>
    </defs>
</svg>;

const items = [
  {
    title: 'Item 1',
    icon: Icon,
    subItems: [
      {
        title: 'Sub Item 1',
        icon: Icon,
        component: <div>Sub Item 1</div>
      },
      {
        title: 'Sub Item 2',
        icon: Icon,
      },
      {
        title: 'Sub Item 3',
        icon: Icon,
      }
    ],
    component: <div>Item 1</div>
  },
    {
    title: 'Item 2',
    icon: Icon,
  },
  {
    title: 'Item 3',
    icon: Icon,
  }
]


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <MyComponent/>
    <div style={{margin:25, width:500}}>
      <VerticalTab>
        <VerticalTabItems items={items} activeTab='Item 3'/>
      </VerticalTab>
    </div>
  </React.StrictMode>,
)
