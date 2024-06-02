import { parseDate, toCalendarDate } from '@internationalized/date';
import { DateInput, DateInputProps, DateValue } from '@nextui-org/react';
import { ReactNode, useCallback, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useController } from 'react-hook-form';
import type { Control, ControllerRenderProps, FieldPathByValue, FieldValues } from 'react-hook-form';

type Props<TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>> = Omit<
  DateInputProps,
  keyof ControllerRenderProps | 'value' | 'isRequired' | 'onChange'
> & {
  control: Control<TFieldValues>;
  name: TPath;
  required?: boolean;
};

const DateField = <TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>>({
  control,
  name,
  required,
  ...rest
}: Props<TFieldValues, TPath>): ReactNode => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control, rules: { required } });

  const [value, setValue] = useState(() => (field.value ? parseDate(field.value) : null));

  const { pending } = useFormStatus();

  const onChange = useCallback(
    (value: DateValue | null) => {
      if (!value) return;

      field.onChange(value.toString());
      setValue(toCalendarDate(value));
    },
    [field],
  );

  return (
    <DateInput
      {...rest}
      inputRef={field.ref}
      name={field.name}
      value={value}
      isDisabled={pending || field.disabled}
      isRequired={required}
      isInvalid={invalid}
      errorMessage={error?.message}
      onChange={onChange}
      onBlur={field.onBlur}
    />
  );
};

export default DateField;
