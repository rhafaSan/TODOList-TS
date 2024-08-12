import styles from "./modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal?.classList.add("hide");
  };

  return (
    <div id="modal">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
