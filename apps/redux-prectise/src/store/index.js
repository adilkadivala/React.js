import { createStore } from 'redux';
import movieListReducers from './reducers/movie-list';

export const Store = createStore(movieListReducers);
