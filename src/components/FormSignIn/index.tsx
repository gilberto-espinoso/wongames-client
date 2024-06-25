import { Email, Lock } from 'styled-icons/material-outlined'

import TextField from '../TextField'
import Button from '../Button'

import Link from 'next/link'
import * as S from './styles'
import { FormWrapper, FormLink } from '../../components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password</S.ForgotPassword>
      <Button size="large" fullWidth>
        Dign in now
      </Button>

      <FormLink>
        Don`t have an account? <Link href="/sign-up">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
