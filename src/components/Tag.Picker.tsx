import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type TagPickerProps = {
  onChange?: (value: string[] | undefined) => void
  values: string[]
}

export default function TagPicker(props: TagPickerProps) {
  const [seleted, setSelected] = useState<string[]>([])
  const [unselected, setUnselected] = useState<string[]>(props.values)
  const selectItem = (selectItemIdx: number) => {
    const unselectItem = unselected.splice(selectItemIdx, 1)
    const selecteds = [...seleted, ...unselectItem]
    setSelected(selecteds)
    props.onChange && props.onChange(selecteds)
    // setUnselected(unselectItem)
  }
  const unselectItem = (unselectIdx: number) => {
    const selectItems = seleted.splice(unselectIdx, 1)
    setUnselected([...unselected, ...selectItems])
    // setSelected(seleted)
    props.onChange && props.onChange(seleted)
  }
  return (
    <S.Wrapper>
      <S.SelectedWrapper>
        {seleted.map((s, idx) => (
          <S.Selected onClick={() => unselectItem(idx)} key={s + idx}>
            {s}{' '}
            <Image
              src="images/icon/cross.svg"
              tw="inline my-auto relative!"
              fill
              alt="cross"
            />
          </S.Selected>
        ))}
      </S.SelectedWrapper>
      <S.UnselectedWrapper>
        {unselected.map((s, idx) => (
          <S.Unselected onClick={() => selectItem(idx)} key={s + idx}>
            {s}
          </S.Unselected>
        ))}
      </S.UnselectedWrapper>
    </S.Wrapper>
  )
}
TagPicker.default = {
  values: [],
}
const S = {
  Wrapper: styled.div(() => [tw`flex flex-col gap-4`]),
  Selected: styled.div(() => [
    tw`rounded px-2 py-1 bg-[#F9F5FF] text-[#942F70]`,
  ]),
  Unselected: styled.div(() => [
    tw`rounded px-2 py-1 bg-[#F2F4F7] text-[#344054]`,
  ]),
  SelectedWrapper: styled.div(() => [tw`flex gap-4 flex-wrap`]),
  UnselectedWrapper: styled.div(() => [tw`flex gap-4 flex-wrap`]),
}
