import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AppRoot } from './App.styles';
import AppNavBar from './components/AppNavBar/AppNavBar';
import SearchProperties from './components/SearchProperties/SearchProperties';

function App() {
  return (
    <AppRoot>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppNavBar />
      <SearchProperties />
    </AppRoot>
  );
}

export default App;
