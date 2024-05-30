import type { CheckboxProps } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/react';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { useController } from 'react-hook-form';
import type { Control, ControllerRenderProps, FieldPathByValue, FieldValues } from 'react-hook-form';

type Props<TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, boolean>> = Omit<
  CheckboxProps,
  keyof ControllerRenderProps | 'value' | 'onValueChange' | 'required' | 'form'
> & {
  control: Control<TFieldValues>;
  name: TPath;
};

const SwitchField = <TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, boolean>>({
  control,
  name,
  ...rest
}: Props<TFieldValues, TPath>): ReactNode => {
  const {
    field: { onChange, value, ...field },
  } = useController({ name, control });
  const { pending } = useFormStatus();

  return <Checkbox isSelected={value} onValueChange={onChange} isDisabled={pending} {...rest} {...field} />;
};

export default SwitchField;
