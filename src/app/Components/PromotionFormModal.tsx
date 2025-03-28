'use client';

import React from 'react';
import PromotionForm from '@/app/Components/PromotionForm';
import Modal, { ModalProps } from '@/app/Components/Modal';

export interface PromotionFormModal extends ModalProps {
  companyId: string;
  onCloseAction: () => void;
}

export default function PromotionFormModal({
  companyId,
  onCloseAction,
  ...rest
}: PromotionFormModal) {
  return (
    <Modal {...rest} onCloseAction={onCloseAction}>
      <PromotionForm companyId={companyId} onSubmit={() => onCloseAction()} />
    </Modal>
  );
}
