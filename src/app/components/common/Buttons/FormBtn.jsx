"use client";

import CustomBtn from "@/app/components/common/Buttons/СustomBtn";
import FeedbackModal from "@/app/components/modals/FeedbackModal";
import { useDisclosure } from "@heroui/react";

export default function FormBtn({ text, variant, presentation }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <CustomBtn text={text} variant={variant} onPress={onOpen} />
      <FeedbackModal
        presentation={presentation}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
