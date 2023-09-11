React unit testing:

    -> To test individual components in isolation.
    -> You have to test the component's functions, logic, and rendering.
    -> Tools to be used: Jest and RTL(React Testing Library)

JEST:-> it's a testing framework provided by facebook.
        -> It's a test runner and provides the assertions,      mocking, snapshot testing, code coverage as well.

        -> Jest docs -  https://jestjs.io/
        
        -> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react

        -> create a .babelrc or babel.config.js file and make this entry:
            {
               "presets": ["@babel/preset-env", "@babel/preset-react"]
            }

        -> create jest.config.js and make this entry
               export default {
                   transform: {
                       "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
                   },
                };
        -> npm i -D jest jest-environment-jsdom react-test-renderer

        -> update jest.config.js:
                export default {
                    testEnvironment: 'jsdom',
                    transform: {
                    "^.+\\.(js|jsx)$": "babel-jest",
                    },
                };

    RTL: -> The @testing-library family of packages   helps you test UI components in a user-centric way.

        -> RTL docs - https://testing-library.com/docs/

        -> install RTL
            npm i @testing-library/react
        -> update the script to run test cases:
          "test": "jest src" in package.json file
        -> npm run test