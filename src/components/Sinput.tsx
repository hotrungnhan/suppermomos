import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// @author Ho Trung Nhan : don't look at the type please =))
type SInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string
  prefixElement?: ReactNode | string
  sufixElement?: ReactNode | string
}
const SInput = React.forwardRef<any, SInputProps>((props, ref) => {
  const { error, sufixElement, prefixElement, ...rest } = props

  return (
    <S.Wrapper>
      {error && <S.Error>{error}</S.Error>}
      {prefixElement && <S.Element>{prefixElement}</S.Element>}
      <S.Input {...rest} ref={ref} />
      {sufixElement && <S.Element>{sufixElement}</S.Element>}
    </S.Wrapper>
  )
})
const S = {
  Wrapper: styled.div(() => [tw`flex justify-around py-4 gap-1`]),
  Element: styled.a(() => [tw`text-[#333333] m-auto inline-block flex-nowrap`]),
  Input: styled.input(({ type }) => [
    tw`text-[#333333] shrink py-1 rounded px-2 outline-0`,
    type != 'radio' && type != 'checkbox' ? tw` w-full` : ``,
  ]),
  Error: styled.div(() => [tw`text-[#333333]`]),
}
SInput.displayName = 'SInput'
export default SInput
