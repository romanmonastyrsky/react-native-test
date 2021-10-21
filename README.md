# react-native-test
Test application on React Native

About the app 
The app downloads a list of the last 25 events that occurred on Github.
When you click on the list item, the application goes to the screen with more detailed information about the event.
Being on the page with the list of events, the list is updated every 60 seconds. 15 seconds after the update, the user has the opportunity to refresh the page. To do this, he needs to swipe down

Running the project
A configured environment is required to run the application. In order to configure it, you need to follow the instructions https://reactnative.dev/docs/environment-setup
Clone this project
Install packages in the project directory - run npm install
To run, you can use one of the following options
npx react-native run-android - run in the android emulator in developer mode
npx react-native run-ios - run in the ios emulator in developer mode
npx react-native run-android --variant=release - Run in the release version
