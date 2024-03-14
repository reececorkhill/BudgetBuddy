# Test module for React

## Configuration
This section covers the initial setup and configuration required to start testing 
a React application. It includes setting up testing libraries and configuring them 
to work with your project.


### Install Enzyme
Enzyme is a testing utility for React that makes it easier to test your components' 
output. You can use Enzyme to simulate events, test component states, and manipulate 
your components for testing purposes. The following command installs Enzyme and 
the Enzyme Adapter for React 16, which is necessary for Enzyme to interface with 
React 16 components. Using `--legacy-peer-deps` ignores peer dependency conflicts, 
which is useful when working with newer versions of React.
```
npm install --save-dev enzyme enzyme-adapter-react-16 --legacy-peer-deps
```

### Install Jest
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. 
It works out of the box for any React project and is used for running 
tests and providing useful feedback. Jest is well-integrated with React, 
making it easy to test components and their behavior. 
The following command installs Jest into your project as a development dependency.
```
npm install --save-dev jest --legacy-peer-deps
```

### Install Jest-Enzyme
`jest-enzyme` is a Jest utility for Enzyme that provides custom matchers for 
writing more expressive and readable tests. This package extends Jest's matcher 
functionalities, specifically tailored for Enzyme's testing approach, making it 
easier to assert, manipulate, and traverse your React components. The following 
command adds `jest-enzyme` to your project, enhancing your testing suite with 
additional capabilities tailored for Enzyme.
```
npm install --save-dev jest-enzyme --legacy-peer-deps
```


## Update project

### Update .eslintrc.cjs
Add in env the jest value, as example
```
...
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
```

### Update package.json
Add jest there also, as next example
```
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint budgetbuddy --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },
```

### Set up tests
Create setupTests.js file in src/, with the next value
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
```

### Create first test and directory
in src/components/ create __tests__, there create a file Message.test.jsx as example
with next value
```
import { shallow } from 'enzyme';
import Message from '../Message';

describe('Message', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Message />);
    });

    it('renders without crashing', () => {
        expect(wrapper).not.toBeNull();
    });

    it('displays the welcome message', () => {
        expect(wrapper.find('h2').text()).toBe('Welcome to BudgetBuddy');
    });
});
```

## Run test

try next command
```
npm test
```