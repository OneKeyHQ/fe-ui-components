import * as React from "react";
import { useControllableProp } from "./useControllable";

export interface UseDisclosureProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    defaultIsOpen,
  } = props;

  const [isOpenState, setIsOpen] = React.useState(defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);

  const onClose = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onCloseProp?.();
  }, [isControlled, onCloseProp]);

  const onOpen = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenProp?.();
  }, [isControlled, onOpenProp]);

  const onToggle = React.useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);

  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
  };
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
