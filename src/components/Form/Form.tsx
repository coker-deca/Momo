import { ButtonHTMLAttributes, EventHandler, FunctionComponent } from 'react';

import { FormProps } from '../templates/AuthTemplate';
import { StyledForm } from './style';

const Form: FunctionComponent<FormProps> = ({
  title,
  details,
  path,
  children,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${path === "signup" ? "Signed Up" : "Signed In"} Successfully`);
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <p className="details">{details}</p>
        {children}
      </StyledForm>
    </div>
  );
};

export default Form;
