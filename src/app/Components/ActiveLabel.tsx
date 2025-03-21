import React from 'react';
import styles from './ActiveLabel.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
