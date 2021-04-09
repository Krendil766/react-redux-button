import './App.css';
import {useCallback} from 'react';
import { Switch, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const lightTheme = useSelector(({ lightTheme }) => lightTheme);
  const theme = useSelector(({theme})=>theme)
  console.log(theme);
  
  const dispatch = useDispatch();
  const onChangeTheme = useCallback((e) => {
    const checked = e.target.checked;
    const switchThemeAction = {
      type: 'SWITCH_THEME',
      payload:checked
    }
    dispatch(switchThemeAction)
  }, [dispatch])
  
  const onChooseTheme = useCallback((e) => {
    const nameTheme = e.target.outerText;
    const switchTheme = {
      type:nameTheme
    }
    dispatch(switchTheme);   
  },[])
  return (
    <div className={`App ${lightTheme ? "App-black" : "App-light"} App_${theme}`}>
      <Switch color='primary' onChange={onChangeTheme} />
      <Button onClick={onChooseTheme}>White</Button>
      <Button onClick={onChooseTheme}>Black</Button>
      <Button onClick={onChooseTheme}>Red</Button>
    </div>
  );
}

export default App;
