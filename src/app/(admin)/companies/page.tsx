import React from 'react';
import CompanyTable from '@/app/Components/CompanyTable';
import CompanyRow from '@/app/Components/CompanyRow';
import { Status } from '@/app/Components/StatusLabel';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
