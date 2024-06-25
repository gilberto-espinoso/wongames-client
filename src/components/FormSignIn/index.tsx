import { Email, Lock } from 'styled-icons/material-outlined'

import TextField from '../TextField'
import Button from '../Button'

import Link from 'next/link'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
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

      <S.FormLink>
        Don`t have an account? <Link href="/sign-up">Sign up</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
