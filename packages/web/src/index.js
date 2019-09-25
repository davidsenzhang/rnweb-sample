import { AppRegistry } from 'react-native';

import App from 'components/src/App';

AppRegistry.registerComponent('rnweb', () => App);
AppRegistry.runApplication('rnweb', {
  rootTag: document.getElementById('root'),
});
