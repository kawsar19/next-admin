import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  isAuthenticated: true,
  isLoading: false,
  user: {
    id: '5e86809283e28b96d2d38537',
    avatar: '/assets/avatars/avatar-anika-visser.png',
    name: 'Anika Visser',
    email: 'anika.visser@devias.io'
  }
};

const reducer = (state, action) => state;

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    dispatch({
      type: 'INITIALIZE'
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
