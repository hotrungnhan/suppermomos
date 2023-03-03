import styled from 'styled-components'
import tw from 'twin.macro'

const HeaderItems = ['Blog', 'Social', 'Past Socials', 'Clubs', 'Contact']
export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo src="logo.png" alt="logo"></S.Logo>
      <S.NavWrapper>
        {HeaderItems.map((item, index) => (
          <S.NavItem key={item + index}>{item}</S.NavItem>
        ))}
      </S.NavWrapper>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.header(() => [tw`flex justify-around py-4`]),
  Logo: styled.img(() => [tw``]),
  NavWrapper: styled.nav(() => [tw`flex gap-16`]),
  NavItem: styled.a(() => [tw`[color: #333333]`]),
}
