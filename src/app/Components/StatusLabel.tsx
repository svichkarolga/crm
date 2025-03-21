import React from 'react';
import styles from './ActiveLabel.module.css';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
}

export default function StatusLabel({ children }: StatusLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
