"use client";

import { Modal, ModalBody, ModalContent, ModalFooter } from "@heroui/react";
import FeedbackForm from "../common/FeedbackForm";

export default function FeedbackModal({ isOpen, onOpenChange, presentation }) {
  return (
    <Modal
      placement="center"
      size="2xl"
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      aria-labelledby="feedback-modal"
      className="mx-4 rounded-lg"
      classNames={{
        body: "py-10 px-7 md:px-10",
        backdrop: "rgba(24, 24, 27, 0.5)",
        base: "w-[84.4%] max-w-[440px]",
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        <ModalBody>
          <FeedbackForm
            presentation={presentation}
            variant="modal"
            modal
            title={`${
              presentation
                ? "Дякуємо за вашу зацікавленість!"
                : "Cтаньте нашим партнером!"
            }`}
          />
          {presentation && (
            <p className="text-center font-semibold">
              Залиште номер телефону для отримання посилання на презентацію
            </p>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
