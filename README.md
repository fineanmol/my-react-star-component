
# My React Star Rating

A customizable and reusable React star rating component.

## Features

- **Customizable Number of Stars**: Set the number of stars.
- **Controlled & Uncontrolled Modes**: Use `value` for controlled components or `defaultValue` for uncontrolled.
- **Half-Star Support**: Allow users to select half-stars.
- **Clearable Selection**: Enable users to reset their selection.
- **Custom Characters**: Use custom characters or icons for stars.
- **Disabled State**: Disable interactions.
- **RTL Support**: Support right-to-left languages.

## Installation

You can install the package using **npm** or **yarn**.

**Using npm:**

```
npm install my-react-star-rating
```

**Using yarn:**

```
yarn add my-react-star-rating
```

## Usage

Here's how you can use the `StarRating` component in your React application.

1. **Import the Component and CSS**

   ```jsx
   import React, { useState } from 'react';
   import { StarRating } from 'my-react-star-rating';
   import 'my-react-star-rating/dist/index.css'; // Adjust the path if necessary
   ```

2. **Implement the Component**

   ```jsx
   function App() {
     const [rating, setRating] = useState(2.5);
     const [hoverValue, setHoverValue] = useState(null);

     return (
       <div style={{ margin: '50px', fontFamily: 'sans-serif' }}>
         <h1>Rate this product:</h1>
         <StarRating
           count={5}
           value={rating}
           allowHalf={true}
           allowClear={true}
           onChange={(val) => setRating(val)}
           onHoverChange={(val) => setHoverValue(val)}
           character='★'
           direction="ltr"
         />
         <p>Your Rating: {rating}</p>
         <p>Hover Value: {hoverValue !== null ? hoverValue : 'None'}</p>

         <h2>Disabled Example</h2>
         <StarRating
           count={5}
           value={3}
           disabled={true}
           character='★'
           direction="ltr"
         />
       </div>
     );
   }

   export default App;
   ```

## Props

| Prop            | Type                                                        | Default | Description                                                               |
|-----------------|-------------------------------------------------------------|---------|---------------------------------------------------------------------------|
| `count`         | `number`                                                    | `5`     | Number of stars to display.                                               |
| `value`         | `number`                                                    | `-`     | Controlled value of the rating.                                          |
| `defaultValue`  | `number`                                                    | `0`     | Initial value for uncontrolled mode.                                     |
| `allowHalf`     | `boolean`                                                   | `false` | Whether to allow half-star selection.                                    |
| `allowClear`    | `boolean`                                                   | `true`  | Whether clicking the same rating clears it.                              |
| `style`         | `React.CSSProperties`                                       | `{}`    | Inline styles for the star rating container.                             |
| `onChange`      | `(value: number) => void`                                   | `-`     | Callback triggered when the rating changes.                             |
| `onHoverChange` | `(value: number) => void`                                   | `-`     | Callback triggered when the hover state changes.                        |
| `character`     | `React.ReactNode` or `(index: number) => React.ReactNode`  | `★`     | Custom character or function to render each star.                        |
| `disabled`      | `boolean`                                                   | `false` | Whether the star rating is disabled.                                    |
| `direction`     | `'ltr'` or `'rtl'`                                          | `'ltr'` | Text direction of the star rating (`ltr` or `rtl`).                      |

## Example

Here's a complete example of how to use the `StarRating` component within a React application.

1. **Import Dependencies**

   ```jsx
   import React, { useState } from 'react';
   import { StarRating } from 'my-react-star-rating';
   import 'my-react-star-rating/dist/index.css'; // Adjust the path if necessary
   ```

2. **Create the App Component**

   ```jsx
   function App() {
     const [rating, setRating] = useState(2.5);
     const [hoverValue, setHoverValue] = useState(null);

     return (
       <div style={{ margin: '50px', fontFamily: 'sans-serif' }}>
         <h1>Rate this product:</h1>
         <StarRating
           count={5}
           value={rating}
           allowHalf={true}
           allowClear={true}
           onChange={(val) => setRating(val)}
           onHoverChange={(val) => setHoverValue(val)}
           character='★'
           direction="ltr"
         />
         <p>Your Rating: {rating}</p>
         <p>Hover Value: {hoverValue !== null ? hoverValue : 'None'}</p>

         <h2>Disabled Example</h2>
         <StarRating
           count={5}
           value={3}
           disabled={true}
           character='★'
           direction="ltr"
         />
       </div>
     );
   }

   export default App;
   ```







MIT © [Anmol Agarwal](https://github.com/fineanmol)


