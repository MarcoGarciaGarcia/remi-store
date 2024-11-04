import { create } from 'zustand'

interface IStore {
  openNavbar: boolean
  toggleChangeNavbar: (open: boolean) => void
}

export const useStore = create<IStore>()((set) => ({
  openNavbar: false,
  toggleChangeNavbar: (open: boolean) => set(() => ({ openNavbar: open }))
}))
