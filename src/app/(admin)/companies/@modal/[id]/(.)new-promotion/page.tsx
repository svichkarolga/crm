'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/Components/PromotionFormModal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  return (
    <PromotionFormModal
      companyId={resolvedParams.id}
      show={true}
      onCloseAction={() => router.back()}
    />
  );
}
