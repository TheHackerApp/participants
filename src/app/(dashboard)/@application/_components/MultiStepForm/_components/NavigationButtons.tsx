import { Button, ButtonProps } from '@nextui-org/react';
import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onBack?: () => void;
  onNext?: () => void;
  backButtonProps?: ButtonProps;
  nextButtonProps?: ButtonProps;
}

const NavigationButtons = ({
  className,
  onBack,
  onNext,
  backButtonProps,
  nextButtonProps,
  ...props
}: Props): ReactNode => (
  <div className={cn('mx-auto my-6 flex w-full items-center justify-center gap-x-4 lg:mx-0', className)} {...props}>
    <Button
      className="rounded-medium border-default-400 text-medium font-medium text-default-600 lg:hidden"
      variant="bordered"
      onPress={onBack}
      {...backButtonProps}
    >
      Go back
    </Button>
    <Button
      type="submit"
      onPress={onNext}
      className="text-medium font-medium"
      style={{
        border: 'solid 2px transparent',
        backgroundImage: `linear-gradient(--nextui-background, --nextui-background), linear-gradient(to right, #F871A0, #935D3)`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
      {...nextButtonProps}
    >
      {nextButtonProps?.children || 'Submit'}
    </Button>
  </div>
);

export default NavigationButtons;
