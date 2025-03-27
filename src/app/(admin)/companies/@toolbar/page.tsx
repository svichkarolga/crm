import React from 'react';
import Header from '@/app/Components/Header';
import Toolbar from '@/app/Components/ToolBar';
import SearchInput from '@/app/Components/SearchInput';
import AddCompanyButton from '@/app/Components/AddCompanyButton';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
