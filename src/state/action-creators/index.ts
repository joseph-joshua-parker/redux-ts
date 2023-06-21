import axios from 'axios';
import { Dispatch } from 'redux';
import {ActionType} from '../action-types';
import {RepositoryAction} from '../actions';

export const searchRepositories = (term: string) =>{
	return async (dispatch: Dispatch<RepositoryAction>) =>{

		dispatch({
			type: ActionType.SEARCH_REPOSITORIES
		})

		try {
			const {data} = await axios.get('https://registory.npmjs.org/-/v1/search',
											{params: {text:term}})

			const names = data.objects.map((result:any) => result.package.name)

			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names
			})

		} catch (err) {
			if (err instanceof Error) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message,
			});
			}
	  }
	}
}
