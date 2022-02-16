import { FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { Container } from './styles';

const Stock: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('reactauth.token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <Link to="/">singIn</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/private">private</Link>
        <Link to="/adm">Adm</Link>
        <Link
          to="/"
          onClick={() => {
            window.localStorage.clear();
          }}
        >
          logout
        </Link>
      </div>
    </Container>
  );
};

export default Stock;
