/*eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';

import { Container, Content, AnimationContainer } from './styles';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import reactImg from '../../assets/react.png';

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .max(255)
    .required('Email obrigatório'),
  password: yup.string().max(255).required('Senha obrigatório'),
});

const SingIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('reactauth.token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  const handleSignIn = async (values: any) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    await signIn(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={reactImg} alt="logo Sol ou Chuva" />

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              type="text"
              placeholder="E-mail"
              Icon={FiMail}
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              placeholder="Password"
              Icon={FiLock}
              error={errors.password}
              {...register('password')}
            />
            <Button type="submit">Entrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SingIn;
