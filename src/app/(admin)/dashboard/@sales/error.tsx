'use client';
import React from 'react';

export interface errorComponentProps {
  error: Error;
}

export default function error({}: errorComponentProps) {
  return <div>Unexpected error in slot sales</div>;
}
