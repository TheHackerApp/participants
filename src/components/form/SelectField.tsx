import { Select, SelectItem, SelectProps } from '@nextui-org/react';
import { ChangeEventHandler, ReactNode, useCallback, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Control, ControllerRenderProps, FieldPathByValue, FieldValues, useController } from 'react-hook-form';

interface Option {
  label?: string;
  value: string;
}

type Props<TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>> = Omit<
  SelectProps<Option>,
  keyof ControllerRenderProps | 'value' | 'onSelectionChange' | 'isRequired' | 'form' | 'children' | 'items'
> & {
  control: Control<TFieldValues>;
  name: TPath;
  options: Iterable<Option | string>;
};

const SelectField = <TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>>({
  name,
  control,
  required,
  options: optionsIter,
  isDisabled,
  ...rest
}: Props<TFieldValues, TPath>): ReactNode => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control });
  const [value, setValue] = useState(() => (field.value ? field.value : ''));
  const { pending } = useFormStatus();

  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      setValue(event.target.value);
      field.onChange(event.target.value);
    },
    [field],
  );

  const options = Array.from(optionsIter).map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  );

  return (
    <Select
      {...rest}
      ref={field.ref}
      name={field.name}
      isDisabled={pending || field.disabled || isDisabled}
      isRequired={required}
      isInvalid={invalid}
      errorMessage={error?.message}
      selectedKeys={[value]}
      onBlur={field.onBlur}
      onChange={onChange}
    >
      {options.map((option) => (
        <SelectItem key={option.value}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectField;
