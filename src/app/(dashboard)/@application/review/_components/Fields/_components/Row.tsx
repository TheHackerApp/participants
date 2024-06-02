import { ReactNode } from 'react';

interface Props<T extends ReactNode> {
  label: string;
  value?: T | null;
  render?: (value: T) => ReactNode;
  required?: boolean;
}

const Row = <T extends ReactNode>({ label, value, required, render = (value) => value }: Props<T>): ReactNode => (
  <div className="grid grid-cols-2">
    <p className="font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </p>
    <p>{value ? render(value) : ''}</p>
  </div>
);

export default Row;
