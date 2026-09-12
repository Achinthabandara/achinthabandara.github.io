import { useEffect, useState } from 'react';

const STORAGE_KEY = 'darkMode';

/**
 * Minimal dark-mode hook (replaces the unmaintained `use-dark-mode` package,
 * which pinned React <=17 peer deps). Persists the choice to localStorage and
 * exposes the same `{ value, toggle }` shape the app already consumes.
 */
export default function useDarkMode(initialValue = false) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        return stored === 'true';
      }
    } catch (e) {
      // localStorage unavailable (e.g. SSR / private mode) — fall back to default
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // ignore persistence errors
    }
  }, [value]);

  return {
    value,
    toggle: () => setValue((prev) => !prev),
    enable: () => setValue(true),
    disable: () => setValue(false),
  };
}
