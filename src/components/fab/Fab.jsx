import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const customTheme = {
  root: {
    base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50",
      off: "hidden",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start",
    },
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner: "relative rounded-lg bg-white shadow flex flex-col max-h-[90vh]",
  },
  body: {
    base: "p-6 flex-1 overflow-auto",
    popup: "pt-0",
  },
  header: {
    base: "flex items-start justify-between rounded-t p-2",
    popup: "p-2 border-b-0",
    title: "text-xl font-medium text-gray-900",
    close: {
      base: "ml-auto inline-flex items-center rounded-full bg-transparent p-1.5 text-[#D9D9D9] hover:text-white hover:bg-gray-200 border-2 ",
      icon: "h-5 w-5",
    },
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6",
    popup: "border-t",
  },
};

export const Fab = ({ icon, className, toShow }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div onClick={() => setOpenModal(true)} className={className}>
        {icon}
      </div>

      <Modal
        theme={customTheme}
        size="3xl"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>{toShow}</Modal.Body>
      </Modal>
    </>
  );
};
