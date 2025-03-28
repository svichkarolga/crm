'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/Components/CompanyFormModal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  // Обработчик отправки формы
  const handleSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
    // Логика обработки данных формы
  };
  return (
    <CompanyFormModal
      show={true}
      onCloseAction={() => router.back()}
      onSubmitAction={handleSubmit}
      onClose={() => router.back()}
    />
  );
}
