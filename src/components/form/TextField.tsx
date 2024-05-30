import type { InputProps } from '@nextui-org/input';
import { Input } from '@nextui-org/react';
import { ChangeEventHandler, ReactNode, useCallback, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useController } from 'react-hook-form';
import type { Control, ControllerRenderProps, FieldPathByValue, FieldValues } from 'react-hook-form';

type Props<TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>> = Omit<
  InputProps,
  keyof ControllerRenderProps | 'value' | 'onValueChange' | 'isRequired' | 'form'
> & {
  control: Control<TFieldValues>;
  name: TPath;
};

const TextField = <TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>>({
  control,
  name,
  type = 'text',
  required,
  ...rest
}: Props<TFieldValues, TPath>): ReactNode => {
  const {
    field: { onChange: onFieldChange, value: initialValue, ...field },
    fieldState: { invalid, error },
  } = useController<TFieldValues, TPath>({ name, control, rules: { required } });

  const [value, setValue] = useState(() => (initialValue ? initialValue : ''));

  const { pending } = useFormStatus();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value);
      onFieldChange(event.target.value);
    },
    [onFieldChange],
  );

  return (
    <Input
      type={type}
      value={value}
      {...rest}
      isDisabled={pending}
      isRequired={required}
      isInvalid={invalid}
      errorMessage={error?.message}
      onChange={onChange}
      {...field}
    />
  );
};

export default TextField;
