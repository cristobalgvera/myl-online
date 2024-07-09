export const CardSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type CardSize = (typeof CardSize)[keyof typeof CardSize];
