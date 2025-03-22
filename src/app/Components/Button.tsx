'use client';
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return <Button {...rest} className={clsx('py-2.5, px-5')} />;
}
