import { FunctionComponent } from 'react';

import { StyledButton } from '../ui/Button';
import { LabeledField } from '../ui/FormFields';

const SignIn: FunctionComponent = () => {
  return (
    <>
      <LabeledField type="email" label="Email" />
      <LabeledField type="password" label="Password" />
      <p className="left">
        Forgot Password? <strong>Reset it</strong>
      </p>
      <StyledButton type="submit">Login</StyledButton>
    </>
  );
};

export default SignIn;
