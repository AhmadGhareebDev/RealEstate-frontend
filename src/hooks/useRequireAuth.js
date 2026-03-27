import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useUiStore } from '../store/uiStore';

export const useRequireAuth = () => {
  const location = useLocation();
  const status = useAuthStore((s) => s.status);
  const openLoginRequired = useUiStore((s) => s.openLoginRequired);

  return useCallback(
    async (action) => {
      if (status === 'authenticated') {
        return action?.();
      }

      openLoginRequired(`${location.pathname}${location.search}${location.hash}`);
      return null;
    },
    [location.hash, location.pathname, location.search, openLoginRequired, status]
  );
};