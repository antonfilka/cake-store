# Code Guide

## Using NPM commands only

### `npm start`

.
.
.

## Guidelines

- file/folder naming - always camelCase
- try to avoid using `export default` and use only named exports
- try to group exports and imports
- use path aliases
- don't export component interfaces for props by default. In most cases no one needs it so don't litter the global scope. It may be needed in edge cases (happens very rarely) - then export it, why not
- for date time using library "Luxon"
- for forms using library "React hook form"
- for api using library "RTK Query"
- for validation using library "yup"
- for components markup use styled components
- group and sort css properties in the following order
  - Positioning
  - Box model
  - Typography
  - Visual formatting
  - Animation
  - Other

## Commits naming

Please use [this](https://www.conventionalcommits.org/en/v1.0.0/) convention
examples:
`feat: allow provided config object to extend other configs`
`docs: correct spelling of CHANGELOG`
