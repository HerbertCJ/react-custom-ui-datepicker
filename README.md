```js
npm i react-custom-ui-datepicker
```

or

```js
yarn add react-custom-ui-datepicker
```

## Basic Usage

```js
import { useState } from 'react';
import { Datepicker } from 'react-custom-ui-datepicker';

const Example = () => {
  const [date, setDate] = useState(null);

  return <Datepicker onChangeDate={setDate} date={date} />;
};

export default Example;
```

For more details access our homepage [here](https://react-custom-ui.com)
