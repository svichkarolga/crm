import React from 'react';
import Header from '@/app/Components/Header';
import ToolBar from '@/app/Components/ToolBar';
import SearchInput from '@/app/Components/SearchInput';
import AddCompanyButton from '@/app/Components/AddCompanyButton';
import CompanyTable from '@/app/Components/CompanyTable';
import CompanyRow from '@/app/Components/CompanyRow';
import { Status } from '@/app/Components/StatusLabel';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <ToolBar action={<AddCompanyButton />}>
          <SearchInput />
        </ToolBar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category={'Products'}
            company={'Costco'}
            status={Status.Pending}
            promotion={true}
            country={'USA'}
            joinedDate={'02.19.2023'}
          />
        </CompanyTable>
      </main>
    </>
  );
}
