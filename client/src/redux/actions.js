// src/redux/actions.js
import { createAction } from '@reduxjs/toolkit';

export const fetchDrafts = createAction('fetchDrafts');
export const fetchPublished = createAction('fetchPublished');
