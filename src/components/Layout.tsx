import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Header from '@/components/Header'

export default function Layout(props: PropsWithChildren) {
  return (
    <S.Wrapper>
      <Header />
      {props.children}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div(() => [
    tw`min-h-[100vh] h-max w-full p-4`,
    css`
      background: linear-gradient(138.11deg, #fef452 0%, #942f70 121.92%);
    `,
  ]),
}
