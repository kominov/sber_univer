import { WithProtection } from 'app/router';
import { SignUpForm } from 'features/auth';

export const SignUpPage = WithProtection(() => {
  return <SignUpForm />;
});
