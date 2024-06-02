'use client';

import { Button } from '@nextui-org/react';
import { ReactNode, useCallback, useTransition } from 'react';
import { toast } from 'react-hot-toast';

interface Props {
  action: () => Promise<string[]>;
}

const Submit = ({ action }: Props): ReactNode => {
  const [isPending, startTransition] = useTransition();

  const onPress = useCallback(
    () =>
      startTransition(async () => {
        const errors = await action();
        for (const error of errors) toast.error(error);
      }),
    [action, startTransition],
  );

  return (
    <div className="flex justify-center">
      <Button
        type="submit"
        onPress={onPress}
        isLoading={isPending}
        className="text-medium font-medium"
        style={{
          border: 'solid 2px transparent',
          backgroundImage:
            'linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #F871A0, #9353D3)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Submit;
