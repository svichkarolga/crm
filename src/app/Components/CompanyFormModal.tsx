'use client';

import React from 'react';
import CompanyForm, { CompanyFormProps } from '@/app/Components/CompanyForm';
import Modal, { ModalProps } from '@/app/Components/Modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmitAction: CompanyFormProps['onSubmitAction'];
}

export default function CompanyFormModal({
  onSubmitAction,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmitAction={onSubmitAction} />
    </Modal>
  );
}
