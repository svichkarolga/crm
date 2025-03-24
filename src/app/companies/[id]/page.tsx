import React from 'react';
import Header from '@/app/Components/Header';

export interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}
