import { useDisclosure } from '@chakra-ui/react';
import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import useDebounce from '../hooks/useDebounce';

type TLayoutContext = {
  sidebarOpen: boolean;
  toggleSidebar(): void;

  searchTerm: string;
  setSearchTerm(term: string): void;
  debouncedSearchTerm: string;

  showSearchBar: boolean;
  setShowSearchBar(value: boolean): void;
};

export const LayoutContext = createContext<TLayoutContext>({
  sidebarOpen: false,
  toggleSidebar() {},
  searchTerm: '',
  debouncedSearchTerm: '',
  setSearchTerm() {},
  showSearchBar: false,
  setShowSearchBar() {},
});

function LayoutContextProvider({ children }: PropsWithChildren) {
  const { isOpen, onToggle } = useDisclosure();
  const [searchBar, setSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const search = useDebounce(searchTerm, 500);

  const setSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const setShowSearchBar = useCallback((value: boolean) => {
    setSearchBar(value);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        sidebarOpen: isOpen,
        toggleSidebar: onToggle,
        debouncedSearchTerm: search,
        searchTerm,
        setSearchTerm: setSearch,
        showSearchBar: searchBar,
        setShowSearchBar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;
