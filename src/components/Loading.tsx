import { Spinner, SpinnerProps } from '@nextui-org/react';
import { ReactNode } from 'react';

import { cn } from '@/lib/styles';

interface Props extends SpinnerProps {
  className?: string;
}

const Loading = ({ className, size = 'lg', color = 'secondary', ...rest }: Props): ReactNode => (
  <div className={cn('flex justify-center', className)}>
    <Spinner size={size} color={color} {...rest} />
  </div>
);

export default Loading;
