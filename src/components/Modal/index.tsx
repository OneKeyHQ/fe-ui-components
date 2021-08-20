import OriginModal, { ModalProps } from './Modal'
import confirm, {
  destroyFns,
  withWarn,
  withInfo,
  withSuccess,
  withError,
  withConfirm,
  ModalStaticFunctions,
} from './confirm';

function modalWarn(props: ModalProps) {
  return confirm(withWarn(props));
}

type ModalType = typeof OriginModal &
  ModalStaticFunctions & {
    destroyAll: () => void;
    // useModal: typeof useModal;
    // config: typeof modalGlobalConfig;
  };

const Modal = OriginModal as ModalType;

// Modal.useModal = useModal;

Modal.info = function infoFn(props: ModalProps) {
  return confirm(withInfo(props));
};

Modal.success = function successFn(props: ModalProps) {
  return confirm(withSuccess(props));
};

Modal.error = function errorFn(props: ModalProps) {
  return confirm(withError(props));
};

Modal.warning = modalWarn;

Modal.warn = modalWarn;

Modal.confirm = function confirmFn(props: ModalProps) {
  return confirm(withConfirm(props));
};

Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

// Modal.config = modalGlobalConfig;

export default Modal;
