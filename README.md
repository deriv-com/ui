# Deriv Ui Library (@deriv-com/ui)
<img alt="NPM Version" src="https://img.shields.io/npm/v/@deriv-com/ui"> <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/@deriv-com/ui"> <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@deriv-com/ui is released under the MIT license." /> [![Coverage Status](https://coveralls.io/repos/github/deriv-com/ui/badge.svg)](https://coveralls.io/github/deriv-com/ui)


## Overview
This is a UI component library made for ReactJS that conforms to the  [Deriv Design System](https://zeroheight.com/36313d3c8/p/439a5c-deriv-design-system). Explore our [Storybook](https://deriv-ui.pages.dev/)  for for comprehensive development documentation .

Also available on [npm](https://www.npmjs.com/package/@deriv-com/ui).

It features two main sections:
- `components`: contains all the components that are built to be used in the deriv platform.
- `hooks`: which contains all the hooks that might be needed in deriv projects. for now we only have two hooks (`useOnClickOutside` and `useDevice`)

## Getting Started
To get started simply install it from the @deriv-com/ui package:
```
npm i @deriv-com/ui
```

## Usage Example
```
import {Button} from "@deriv-com/ui"

<Button  color="primary" rounded="sm"  size="md"  type="button"  variant="contained"  >  Click me! </Button>
```
you can explore the Storybook to learn about the available props for each component.
## Development

To get started, first install all of the relevant packages by doing:

```
npm i
```
Since this projects uses Storybook to showcase the components. You can serve them by simply running this command:
```
npm run storybook
```

## Contributing
Contributions to the @deriv-com/ui library are warmly encouraged. If you have suggestions for enhancements or encounter a bug, please feel free to open an issue or submit a pull request (ensure you fork it first).

<a height="15" href = "https://github.com/deriv-com/ui/contributors">
  <img src = "https://contrib.rocks/image?repo=deriv-com/ui&anon=0&columns=20"/>
</a>



