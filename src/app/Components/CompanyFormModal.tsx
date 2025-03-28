'use client';

import React from 'react';
import CompanyForm, { CompanyFormProps } from '@/app/Components/CompanyForm';
import Modal, { ModalProps } from '@/app/Components/Modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmitAction: CompanyFormProps['onSubmitAction'];
  onClose: () => void;
}

export default function CompanyFormModal({
  onSubmitAction,
  onCloseAction,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest} onCloseAction={onCloseAction}>
      <CompanyForm onSubmitAction={onSubmitAction} />
    </Modal>
  );
}
