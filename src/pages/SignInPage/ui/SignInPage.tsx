import { WithProtection } from 'app/router';
import { SignInForm } from 'features/auth';

export const SignInPage = WithProtection(() => {
  return <SignInForm />;
});
