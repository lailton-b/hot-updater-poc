/**
 * @format
 */

import {HotUpdater} from '@hot-updater/react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Config from 'react-native-config';

const Root = HotUpdater.wrap({
  source: Config.CODEPUSH_SERVER_URI,
})(App);

AppRegistry.registerComponent(appName, () => Root);
