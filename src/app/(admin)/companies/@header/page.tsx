import React from 'react';
import Header from '@/app/Components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div>
      <Header>Companies</Header>
    </div>
  );
}