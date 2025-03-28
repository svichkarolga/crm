'use client';

import React, { use } from 'react';
import PromotionForm from '@/app/Components/PromotionForm';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={resolvedParams.id} />
    </div>
  );
}
