import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateData,
  updateError,
  updateLoader,
} from '../store/actions/movie-list';

export function useNetwork() {
  const dispatch = useDispatch();

  async function get(url) {
    try {
      dispatch(updateLoader(true));
      dispatch(updateError(''));
      dispatch(updateData([]));

      const response = await axios.get(url);
      updateData(response.data);
    } catch (error) {
      console.log(error);
      updateError(error);
    } finally {
      () => {
        updateLoader(false);
      };
    }
  }

  return { get };
}
