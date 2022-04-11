import { FunctionComponent } from 'react';

const MobileMenu: FunctionComponent = () => {
  return (
    <div style={{ position: "absolute", background: "#fff", zIndex: 100 }}>
      <nav>
        <p>Company</p>
        <p>Features</p>
        <p>Help</p>
        <p>Login</p>
        <p>Register</p>
      </nav>
    </div>
  );
};

export default MobileMenu;
