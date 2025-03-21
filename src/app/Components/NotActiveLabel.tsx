import styles from "./NotActiveLabel.module.scss";
import React from "react";

export interface NotActiveLabelProps {
    children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
    return <span className={styles.label}>{children}</span>;
}
