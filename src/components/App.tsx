import { Provider } from "react";
import {store} from '../state';
import RepositoriesList from './RepositoriesList';

const App = () =>{
	return <Provider store={store}>
		<h1>Hi!</h1>
		<RepositoriesList/>
	</Provider>
}

export default App;