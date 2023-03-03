// @ts-nocheck

import { useCallback, useState } from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import tw from 'twin.macro'

type ImagePickerProps = {
  onChange?: (value: string | undefined) => void
  values?: string[]
}

export default function ImagePicker(props: ImagePickerProps) {
  const [selectedImage, setSelectedImages] = useState<string | undefined>(
    undefined
  )
  const [currentSelect, setCurrentSelectImage] = useState<number | undefined>(
    undefined
  )
  const emitOnChange = useCallback(() => {
    setSelectedImages(props.values[currentSelect])
    props.onChange && props.onChange(selectedImage)
  }, [currentSelect, props, selectedImage])
  return (
    <StyledPopup
      modal
      trigger={
        !selectedImage ? (
          <S.Trigger.Wrapper {...props}>
            <S.Trigger.Content.Wrapper>
              <S.Trigger.Content.Icon>
                <img src="add-image.svg" />
              </S.Trigger.Content.Icon>
              <S.Trigger.Content.Text>Add a banner</S.Trigger.Content.Text>
            </S.Trigger.Content.Wrapper>
          </S.Trigger.Wrapper>
        ) : (
          <S.Trigger.Content.Image {...props} src={selectedImage} />
        )
      }
    >
      {(close: any) => (
        <S.Model.Wrapper>
          <S.Model.Header.Wrapper>
            <h1 tw="text-[#545D73] font-bold text-lg">Choose A Banner</h1>
            <S.Model.Button.Close onClick={close}>X</S.Model.Button.Close>
          </S.Model.Header.Wrapper>
          <S.Model.Divider />
          <S.Model.Content.Wrapper>
            {props.values?.map((i, index) => {
              return (
                <div tw="w-[100%/5] h-[100px]" key={i + index}>
                  <S.Model.Content.Image
                    src={i}
                    css={[
                      currentSelect == index &&
                        tw`outline-4 outline outline-blue-400`,
                    ]}
                    onClick={() => {
                      console.log(index)
                      setCurrentSelectImage(index)
                    }}
                  />
                </div>
              )
            })}
          </S.Model.Content.Wrapper>
          <S.Model.Divider />
          <S.Model.Button.Wrapper>
            <S.Model.Button.Default onClick={close}>
              Close
            </S.Model.Button.Default>
            <S.Model.Button.Default
              tw="bg-[#FEF452] text-[#942F70] disabled:bg-[gray]"
              onClick={() => {
                emitOnChange()
                close()
              }}
              disabled={props.values?.at(currentSelect) == selectedImage}
            >
              Save
            </S.Model.Button.Default>
          </S.Model.Button.Wrapper>
        </S.Model.Wrapper>
      )}
    </StyledPopup>
  )
}
ImagePicker.default = {
  values: [],
}
const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.7);
  }
`
const S = {
  Trigger: {
    Wrapper: styled.div(() => [
      // rgba(242, 242, 242, 0.1); -> #f2f2f2/10
      tw`h-[24rem] w-[36rem]  bg-[#f2f2f2]/10 flex justify-center content-center border-dashed border rounded-bl-[40px] rounded-tr-[40px] `,
    ]),
    Content: {
      Wrapper: styled.div(() => [tw`my-auto flex`]),
      Icon: styled.strong(() => [tw` inline-block mr-4`]),
      Text: styled.strong(() => [tw`text-[#14597A] `]),
      Image: styled.img(() => [
        tw`object-fill w-[36rem] h-[24rem] mx-auto border-dashed border rounded-bl-[40px] rounded-tr-[40px] `,
      ]),
    },
  },
  Model: {
    Divider: styled.div(() => [tw`border`]),
    Wrapper: styled.div(() => [
      tw`min-w-[80vw] bg-white flex flex-col justify-between rounded gap-4 py-4`,
    ]),
    Header: {
      Wrapper: styled.div(() => [tw`flex justify-between px-4`]),
    },
    Content: {
      Wrapper: styled.div(() => [
        tw`w-full h-full grid grid-cols-6 auto-rows-fr shrink px-4 gap-2`,
      ]),
      Image: styled.img(() => [tw`flex w-full h-full object-cover`]),
    },
    Button: {
      Wrapper: styled.div(() => [tw`flex justify-end gap-4 px-4`]),
      Close: styled.button(() => [tw`flex`]),
      Default: styled.button(() => [tw`flex py-2 rounded px-4`]),
    },
  },
}
