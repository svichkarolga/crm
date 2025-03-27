'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyForm from '@/app/Components/CompanyForm';
import Modal from '@/app/Components/Modal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onCloseAction={() => router.back()}>
      <CompanyForm onSubmitAction={console.log} />
    </Modal>
  );
}
