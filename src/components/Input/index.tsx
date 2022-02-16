import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FieldError } from 'react-hook-form';

import { Container, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: Record<string, unknown>;
  name: string;
  Icon?: React.ComponentType<IconBaseProps>;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ containerStyle = {}, name, Icon, error, ...rest }, ref) => {
  return (
    <>
      <Container style={containerStyle} isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input name={name} id={name} ref={ref} {...rest} />
      </Container>

      <ErrorMessage isErrored={!!error}>
        {!!error && <span>{error.message}</span>}
      </ErrorMessage>
    </>
  );
};

export const Input = forwardRef(InputBase);
