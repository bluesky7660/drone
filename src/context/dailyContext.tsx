// DailyContext.tsx
import React, { createContext, useContext, useState, useCallback } from 'react';

type DailyContextType = {
  roomUrl: string | null;
  setRoomUrl: (url: string | null) => void;
  isVideoCallActive: boolean;
  setIsVideoCallActive: (active: boolean) => void;
  onClose: () => void;
};

const DailyContext = createContext<DailyContextType | undefined>(undefined);

export const DailyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [roomUrl, setRoomUrl] = useState<string | null>(null);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);

  const onClose = useCallback(() => {
    setIsVideoCallActive(false);
    setRoomUrl(null);
  }, []);

  return (
    <DailyContext.Provider value={{ roomUrl, setRoomUrl, isVideoCallActive, setIsVideoCallActive, onClose }}>
      {children}
    </DailyContext.Provider>
  );
};

export const useDaily = () => {
  const context = useContext(DailyContext);
  if (!context) {
    throw new Error('useDaily must be used within a DailyProvider');
  }
  return context;
};
