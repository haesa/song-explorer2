import { create } from 'zustand';

export const useKeywordStore = create((set) => ({
  keyword: '',
  updateKeyword: (value) => set(() => ({ keyword: value })),
}));
