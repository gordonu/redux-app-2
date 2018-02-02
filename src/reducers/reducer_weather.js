import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat[action.payload.data];
			//push mutates the old array
			//concat returns a new array (better approach, aren't mutating state, returning a new version of state)
			return [ action.payload.data, ...state ];
			//make a new array, put action.payload.data inside of it, then spread operator
			// [ city, city, city ] NOT [city, [ city, city ]]
	}
	return state;
}