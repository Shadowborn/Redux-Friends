// I need axios
import axios from 'axios';

// I need to create 3 different action types here
// one for fetching, one for success and one for failure
// Actions are payloads of information that send data from 
// your application to your store. They are the only source
// of information for the store.


// I need to make an action creator that will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now I have control over our thunk-based action creator
// because thunk action creators return a function instead of an action
// the thunk can be used to delay the dispatch of an action, or to dispatch
// only if a certain condition is met

