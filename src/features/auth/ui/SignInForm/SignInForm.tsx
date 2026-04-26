import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';

import { signInFormSchema, type SignInFormValues } from 'features/auth';
import { useSignInMutation } from 'shared/store/api/authApi';
import { userActions } from 'shared/store/slices/user';
import { getMessageFromError } from 'shared/utils';

export const SignInForm: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [signInRequestFn] = useSignInMutation();
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInFormSchema),
  });

  const submitHandler: SubmitHandler<SignInFormValues> = async (values) => {
    try {
      const response = await signInRequestFn(values).unwrap();

      dispatch(userActions.setUser(response.user));
      dispatch(
        userActions.setAccessToken({ accessToken: response.accessToken })
      );

      toast.success('Вы успешно авторизованы!');

      if (location.state?.from) {
        return navigate(location.state.from);
      }

      navigate('/');
    } catch (error) {
      toast.error(
        getMessageFromError(
          error,
          'Не известная ошибка при авторизации пользователя'
        )
      );
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
					Sign In
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(submitHandler)}
          noValidate
          sx={{ my: 1 }}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                inputRef={(el) => {
                  emailInputRef.current = el;
                  field.ref(el);
                }}
                margin='normal'
                label='Email Address'
                type='email'
                fullWidth
                required
                autoComplete='email'
                error={!!errors.email?.message}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                label='Password'
                type='password'
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                margin='normal'
                fullWidth
                required
                {...field}
              />
            )}
          />

          <Button
            type='submit'
            disabled={isSubmitted && (!isValid || isSubmitting)}
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
						Sign IN
          </Button>
          <Box display='flex' justifyContent='center' flexGrow={1}>
            <Link component={RouterLink} to='/signup'>
							SIGN UP
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
