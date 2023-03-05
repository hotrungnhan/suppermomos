import Image from 'next/image'
import styled from 'styled-components'
import tw from 'twin.macro'

export default function Header() {
  const HeaderItems = [
    'Blog',
    'Social',
    'Past Socials',
    // eslint-disable-next-line react/jsx-key
    <div tw="flex">
      Clubs
      <Image
        src="images/icon/chevron-down.svg"
        tw="relative! "
        width={16}
        height={16}
        alt="expand"
      />
    </div>,
    'Contact',
  ]
  return (
    <S.Wrapper>
      <S.Logo src="images/icon/logo.png" alt="logo"></S.Logo>
      <S.NavWrapper>
        {HeaderItems.map((item, index) => (
          <S.NavItem key={index}>{item}</S.NavItem>
        ))}
      </S.NavWrapper>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.header(() => [tw`flex justify-around py-4 `]),
  Logo: styled.img(() => [tw``]),
  NavWrapper: styled.nav(() => [tw`flex gap-8 shrink`]),
  NavItem: styled.a(() => [tw`[color: #333333] grow`]),
}
