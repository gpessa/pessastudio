import { i18n } from "@lingui/core";

export const formatSize = (value: number) => `${i18n.number(value / 10)} cm.`;

export const formatWeight = (value: number) => `${i18n.number(value)} kg.`;
