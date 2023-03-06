/* eslint-disable @next/next/no-img-element */
import { NextPageContext } from 'next'
import Image from 'next/image'
import 'twin.macro'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Social } from '@/types/social'

Home.getInitialProps = (ctx: NextPageContext) => {
  return JSON.parse(ctx.query.data as string)
}

export default function Home(props: Social) {
  return (
    <div tw="p-4 container mx-auto mt-16">
      <div tw="flex justify-between h-max gap-4">
        <section id="title" tw="relative w-[40%] overflow-visible mt-8">
          <div tw="bg-none w-fit text-left min-w-[3rem] max-w-[110%] border-none outline-0 break-words bg-amaranth-deep-purple text-white text-5xl font-bold">
            {props.title}
          </div>
          <div tw="flex flex-col gap-4 mt-4 font-medium">
            <div tw="flex gap-2 text-xl font-bold">
              <S.ItemWrapper>
                <Image
                  src="images/icon/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                  tw="relative!"
                />
                <p>{new Date(props.startAt).toLocaleDateString()}</p>
              </S.ItemWrapper>
              <S.ItemWrapper>
                <Image
                  src="images/icon/clock.svg"
                  alt="clock"
                  width={40}
                  height={40}
                  tw="relative!"
                />
                <p>{new Date(props.startAt).toLocaleTimeString()}</p>
              </S.ItemWrapper>
            </div>
            <S.ItemWrapper>
              <Image
                src="images/icon/location.svg"
                alt="location"
                width={16}
                height={16}
                tw="relative!"
              />
              <p>{props.venue}</p>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemWrapper>
                <Image
                  src="images/icon/people.svg"
                  alt="people"
                  width={16}
                  height={16}
                  tw="relative!"
                />
                <p>{props.capacity} people</p>
              </S.ItemWrapper>
              <S.ItemWrapper>
                <Image
                  src="images/icon/dolar.svg"
                  alt="people"
                  tw="relative!"
                  width={16}
                  height={16}
                />
                <p>${props.price}</p>
              </S.ItemWrapper>
            </S.ItemWrapper>
          </div>
        </section>
        <img
          tw="w-[60%] rounded-bl-[40px] rounded-tr-[40px]"
          src={props.banner}
          alt="banner"
        />
      </div>
      <div tw="w-[60%] rounded-2xl flex flex-col gap-4 mt-8 ">
        <section id="description" tw="flex flex-col">
          <div
            placeholder="Description of your event.."
            tw="h-96 p-2 rounded-xl"
          >
            {props.description}
          </div>
        </section>
      </div>
    </div>
  )
}

const S = {
  ItemWrapper: styled.div(tw`gap-2 flex items-center`),
  Image: styled.img``,
}
