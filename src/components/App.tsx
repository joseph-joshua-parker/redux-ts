import { Provider } from "react";
import {store} from '../state';

const App = () =>{
	return <Provider store={store}>
		<h1>Hi!</h1>
	</Provider>
}

export default App;