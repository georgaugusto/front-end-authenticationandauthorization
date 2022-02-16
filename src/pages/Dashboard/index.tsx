/*eslint-disable @typescript-eslint/no-non-null-assertion */

import { useContext } from 'react';
import decode from 'jwt-decode';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, Tokens, Code } from './styles';

const Stock: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Tokens>
        <h6>localStorage - Token</h6>
        <p>{localStorage.getItem('reactauth.token')}</p>

        <h6>localStorage - Refresh Token</h6>
        <p>{localStorage.getItem('reactauth.refreshToken')}</p>
      </Tokens>

      <Code>
        <div>
          <h6>User Context</h6>
          <pre>
            <code>
              {JSON.stringify(
                {
                  user,
                },
                null,
                2,
              )}
            </code>
          </pre>
        </div>
        <div>
          <h6>local Storage - Decode Token</h6>
          <pre>
            <code>
              {JSON.stringify(
                decode(localStorage.getItem('reactauth.token')!),
                null,
                2,
              )}
            </code>
          </pre>
        </div>
      </Code>
    </Container>
  );
};

export default Stock;
