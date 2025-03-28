import React from 'react';
import Toolbar from '@/app/Components/ToolBar';
import SearchInput from '@/app/Components/SearchInput';
import AddPromotionButton from '@/app/Components/AddPromotionButton';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
