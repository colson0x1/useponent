# usePonent

## Introduction

**usePonent** is a React component library that provides a set of reusable components and custom hooks to help you build modern web applications. It includes components such as Accordion, Button, Dropdown, Modal, SortableTable, and custom hooks like useCounter. These components and hooks can be easily integrated into your React projects to enhance the functionality and user experience of your application.

### usePonent screenshot
![usePonent screenshot](https://i.imgur.com/2VHccI9.png)

## Installation

To use the usePonent library in your React project, you can install it from npm or yarn:

```bash
npm install useponent
```

or

```bash
yarn add useponent
```

## Usage

To use the components and hooks from usePonent, import them into your React application and start using them.

Here is an example of how you can use the Accordion component:

```jsx
import React from 'react';
import { Accordion } from 'useponent';

function App() {
  const items = [
    {
      id: 'qasdj123lk2',
      label: 'Question 1',
      content: 'Answer 1',
    },
    {
      id: '89jek2jksok',
      label: 'Question 2',
      content: 'Answer 2',
    },
    // Add more items as needed
  ];

  return <Accordion items={items} />;
}

export default App;
```

In this example, the Accordion component is used to display a list of questions and answers in an expandable/collapsible format.

You can similarly import and use other components such as Button, Dropdown, Modal, SortableTable, and custom hooks like useCounter in your application.

For detailed usage examples and API documentation of each component and hook, refer to the documentation of each component or hook in the library.

## Custom Components and Hooks

### Accordion

The Accordion component provides a way to create expandable/collapsible sections. It accepts an array of items, each containing a unique `id`, a `label`, and `content`. Clicking on a section's label expands or collapses the corresponding content.

Example usage:

```jsx
import React from 'react';
import { Accordion } from 'useponent';

function MyComponent() {
  const items = [
    {
      id: '1',
      label: 'Question 1',
      content: 'Answer 1',
    },
    {
      id: '2',
      label: 'Question 2',
      content: 'Answer 2',
    },
    // Add more items as needed
  ];

  return <Accordion items={items} />;
}

export default MyComponent;
```

### Button

The Button component provides a customizable button with various styles and variations. It supports primary, secondary, success, warning, and danger variations, as well as outline and rounded styles.

Example usage:

```jsx
import React from 'react';
import { Button } from 'useponent';

function MyComponent() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button success>Success Button</Button>
      <Button warning>Warning Button</Button>
      <Button danger>Danger Button</Button>
      <Button outline>Outline Button</Button>
      <Button rounded>Rounded Button</Button>
    </div>
  );
}

export default MyComponent;
```

### Dropdown

The Dropdown component provides a customizable dropdown select menu. It accepts an array of options and allows the user to select a value from the dropdown menu.

Example usage:

```jsx
import React, { useState } from 'react';
import { Dropdown } from 'useponent';

function MyComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
}

export default MyComponent;
```

### Modal

The Modal component provides a modal dialog box that can be used to display additional content or capture user input. It can be triggered by a button click or any other event.

Example usage:

```jsx
import React, { useState } from 'react';
import { Modal, Button } from 'useponent';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal>
    </div>
  );
}

export default MyComponent;
```

### SortableTable

The SortableTable component provides a table with sortable columns. It allows the user to sort the table data based on a specific column by clicking on the column header.

Example usage:

```jsx
import React from 'react';
import { SortableTable } from 'useponent';

function MyComponent() {
  const data = [
    { id: 1, name: 'Colson', wpmAvg: 110, email: 'cols@google.com' },
    { id: 2, name: 'Shishir', wpmAvg: 85, email: 'spark@google.com' },
    { id: 3, name: 'Samriddha', wpmAvg: 75, email: 'zephyr@google.com' },
    // Add more data as needed
  ];

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'wpmAvg', header: 'Average WPM' },
    { key: 'email', header: 'Email' },
  ];

  return <SortableTable data={data} columns={columns} />;
}

export default MyComponent;
```

### Counter

The CounterPage component utilizes a reducer function to update and manipulate state in response to dispatched actions.

In the CounterPage component, the reducer function is implemented using the `useReducer` hook from React. It takes in the current state and an action object, and based on the action type, it performs the necessary state updates using the Immer library for immutable updates.

The reducer handles the following actions:

- `INCREMENT_COUNT`: Increments the count by 1.
- `DECREMENT_COUNT`: Decrements the count by 1.
- `ADD_VALUE_TO_COUNT`: Adds the `valueToAdd` to the count and resets `valueToAdd` to 0.
- `SET_VALUE_TO_ADD`: Sets the `valueToAdd` to the payload value.

By dispatching these actions to the reducer, the CounterPage component manages its state effectively and updates the count accordingly. The use of Immer simplifies the process of updating the state immutably without the need for manual object cloning.

### Usage

To use the CounterPage component in your React project, follow these steps:

1. Install the necessary dependencies:

   ```bash
   npm install immer react
   ```

2. Import the CounterPage component:

   ```jsx
   import CounterPage from './path/to/CounterPage';
   ```

3. Render the CounterPage component in your application:

   ```jsx
   function App() {
     return (
       <div>
         {/* Other components */}
         <CounterPage initialCount={0} />
         {/* Other components */}
       </div>
     );
   }
   ```

### Example

Here's an example of how to use the CounterPage component in a React application:

```jsx
import React from 'react';
import CounterPage from './CounterPage';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <CounterPage initialCount={10} />
      {/* Other components */}
    </div>
  );
}

export default App;
```

---

These are just a few examples of the components and hooks provided by usePonent. You can explore more components and hooks in the library documentation to find the ones that best fit your needs.

## Conclusion

**usePonent** is a versatile React component library that offers a variety of components and hooks to enhance your application development experience. Whether you need UI components, form elements, or utility hooks, usePonent provides a comprehensive set of tools to simplify your React development process. Give it a try and see how it can streamline your workflow and improve your React projects.

---

## Screenshots

### usePonent 
![usePonent](https://i.imgur.com/2VHccI9.png)

### usePonent - Dropdown
![usePonent - Dropdown](https://i.imgur.com/BT206iO.png)

### usePonent - First Dropdown Select
![usePonent - First Dropdown Select](https://i.imgur.com/6iR1vA2.png)

### usePonent - Second Dropdown Select
![usePonent - Second Dropdown Select](https://i.imgur.com/NiCm3zQ.png)

### usePonent - Both Dropdown Selected
![usePonent - Both Dropdown Selected](https://i.imgur.com/TNWGBCi.png)

### usePonent - Accordion Collapsed
![usePonent - Accordion Collapsed](https://i.imgur.com/SNJvQux.png)

### usePonent - Accordion Opened
![usePonent - Accordion Opened](https://i.imgur.com/DxLFPIK.png)

### usePonent - Button
![usePonent - Button](https://i.imgur.com/DLuId7I.png)

### usePonent - Modal
![usePonent - Modal](https://i.imgur.com/dfPIVLT.png)

### usePonent - Modal Opened
![usePonent - Modal Opened](https://i.imgur.com/H565wS5.png)

### usePonent - Table
![usePonent - Table](https://i.imgur.com/SBtDDdi.png)

### usePonent - Table Sorted by XPs
![usePonent - Table Sorted by XPs](https://i.imgur.com/19Kq8gN.png)

### usePonent - Table Sorted by WPM Score
![usePonent - Table Sorted by WPM Score](https://i.imgur.com/fKVSld0.png)

### usePonent - Table Sorted by Races
![usePonent - Table Sorted by Races](https://i.imgur.com/TYKOV6g.png)


### usePonent - Counter 
![usePonent - Counter ](https://i.imgur.com/wDHNqaJ.png)

### usePonent - Counter Addition in Action
![usePonent - Counter Addition in Action](https://i.imgur.com/FX0tmiM.png)

## usePonent - Counter Addition Result
![usePonent - Counter Addition Result](https://i.imgur.com/326cUWI.png)

## usePonent - Counter Decrement in Action
![usePonent - Counter Decrement in Action](https://i.imgur.com/AJeOdhF.png)

## usePonent - Counter Increment in Action
![usePonent - Counter Increment in Action](https://i.imgur.com/6fWoO9S.png)