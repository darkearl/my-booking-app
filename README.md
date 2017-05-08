# React Native Example
It's a nice beginning for a new react native project with redux.

## Howto

Install Dependencies:

1. NodeJS( ~> 6.2.2 )

   `$ brew update && brew install node`

2. npm( ~> 3.10.3 )

3. rnpm

    `npm install -g rnpm`

In iOS platform, `Xcode` is needed.

In Android platfrom, `Android studio` or `Genymotion` is needed.

After finish install dependencies.

Then lauch it
1. `$ npm install`
2. `$ react-native upgrade`
3. `$ rnpm link`
4. `$ react-native run-ios` or `react-native run-android`

Done.

You need start an iOS simulator or android simulator before running your app, see more: https://facebook.github.io/react-native/docs/getting-started.html
## Libraries Used
  - React Native
  - Redux
  - Native-base (https://docs.nativebase.io/)
  - React-native-router-flux (https://github.com/aksonov/react-native-router-flux)
  - Redux-thunk (https://github.com/gaearon/redux-thunk)
  - Redux-form (http://redux-form.com/6.6.3/docs/api/)
## FAQ
Question: **How to debug app**

ReactNative use chrome debugger by default. You need install chrome browser before debug your app.

iOS Simulator:

1. Open your app
2. Input `ctrl + command + z `( if not, try `command + d` )
3. Choose `Open debugger` from the new modal. Now chrome will open a new page: `http://localhost:8081/debugger-ui`
4. Select `pause on exception` in chrome debugger( optional )
5. Refresh your app page( command + R )

Android:

1. Open your app
2. Input `command + m`
3. Choose `Open debugger` from the new modal. Now chrome will open a new page: `http://localhost:8081/debugger-ui`
4. Select `pause on exception` in chrome debugger( optional )
5. Refresh your app page( double click R )

see more: https://facebook.github.io/react-native/docs/debugging.html

Question: **How to rename my project**

1. Update the name of `package.json`
2. Update the name of `index.ios.js` & `index.android.js`
3. `rm -rf ios; rm -rf android; rm -rf app.json;`
4. `react-native upgrade`
5. `rnpm install`

It's all