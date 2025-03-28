'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/Components/CompanyFormModal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  // Обработчик для отправки формы
  const handleSubmit = () => {
    console.log('Form submitted');
    // Логика отправки формы
    router.back(); // Вернуться назад после отправки формы
  };

  return (
    <CompanyFormModal
      show={true}
      onCloseAction={() => router.back()}
      onClose={() => router.back()}
      onSubmitAction={handleSubmit}
    />
  );
}
