/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/Components/SummaryTable';
import SummaryTableHeader from '@/app/Components/SummaryTableHeader';
import SummaryTableCell from '@/app/Components/SummaryTableCell';
import DashboardCard from '@/app/Components/DashboardCard';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
