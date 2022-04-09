import { FunctionComponent } from 'react';

import { StyledButton } from '../ui/Button';
import { LabeledField } from '../ui/FormFields';

const SignUp: FunctionComponent = () => {
  return (
    <>
      <LabeledField type="text" label="Fullname" />
      <LabeledField type="text" label="Phone Number" />
      <LabeledField type="email" label="Email" />
      <LabeledField type="password" label="Password" />
      <StyledButton type="submit">Sign Up</StyledButton>
    </>
  );
};

export default SignUp;
