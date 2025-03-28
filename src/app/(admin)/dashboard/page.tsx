/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import Header from '@/app/Components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
