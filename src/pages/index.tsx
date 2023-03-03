import Head from 'next/head'
import { Controller, useForm } from 'react-hook-form'
import IconInput from '@/components/Icon.Input'
import ImagePicker from '@/components/Image.Picker'

import 'twin.macro'
import TagPicker from '@/components/Tag.Picker'
import { useEffect } from 'react'
const tags = ['Engineering', 'Product', 'Marketing', 'Design']

const banners = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/250/250',
  'https://picsum.photos/300/300',
  'https://picsum.photos/350/250',
  'https://picsum.photos/200/150',
  'https://picsum.photos/300/300',
  'https://picsum.photos/350/250',
  'https://picsum.photos/200/150',
  'https://picsum.photos/300/300',
  'https://picsum.photos/350/250',
  'https://picsum.photos/200/150',
]
const privacys = ['Public', 'Curated Audience', 'Community Only']
export default function Home() {
  const { register, handleSubmit, setValue, control } = useForm()
  useEffect(() => {
    register('tags', {
      value: [],
    })
    register('title', {
      value: '',
    })
  }, [register])

  const onSubmit = (data: any) => console.log(data)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form tw="p-4 container mx-auto">
          <section id="title">
            <div tw="flex justify-between h-max gap-4">
              <div tw="relative w-[40%]">
                <div tw="relative h-[12rem] ">
                  <div
                    contentEditable
                    onInput={(e) =>
                      setValue('title', e.currentTarget.innerText)
                    }
                    tw="bg-none absolute bottom-0 left-0 text-left min-h-[1rem] min-w-[3rem] max-w-[110%] border-none outline-0 bg-[#942F70] text-white text-5xl font-bold"
                  />
                </div>
                <div tw="flex gap-2">
                  <IconInput
                    type="date"
                    {...register('startAtDate')}
                    prefixElement={<img src="calendar.svg" />}
                  />
                  <IconInput
                    type="time"
                    {...register('startAtTime')}
                    prefixElement={<img src="clock.svg" />}
                  />
                </div>
                <IconInput
                  prefixElement={<img src="location.svg" />}
                  defaultValue="Chelsea Market (163 W 20nd Street). Manhattan, NYC"
                  {...register('venue')}
                />
                <div tw="flex gap-2">
                  <IconInput
                    type="number"
                    defaultValue={50}
                    {...register('capacity')}
                    prefixElement={<img src="people.svg" />}
                  />
                  <IconInput
                    type="number"
                    defaultValue={30}
                    {...register('price')}
                    prefixElement={<img src="dolar.svg" />}
                  />
                </div>
              </div>
              <ImagePicker
                tw="w-[60%]"
                values={banners}
                onChange={(banner) => setValue('banner', banner)}
              />
            </div>
          </section>
          <div tw="flex"></div>
          <div tw="w-[60%] rounded-2xl ">
            <div tw="flex flex-col gap-4">
              <section id="description" tw="flex flex-col">
                <h3>Description</h3>
                <textarea
                  {...register('description')}
                  placeholder="Description of your event.."
                  tw="h-96 p-2 rounded-xl border outline-0"
                ></textarea>
              </section>
              <section id="settings" tw="flex flex-col bg-white p-8 rounded-xl">
                <h3 tw="bg-[#FEF452] text-[#942F70] w-fit px-2 py-2 font-bold text-2xl">
                  Setting
                </h3>
                <div tw="flex">
                  <IconInput
                    tw="w-fit"
                    type="checkbox"
                    {...register('isManualApprove')}
                    sufixElement={
                      <a tw="font-medium">I want to approve attendees</a>
                    }
                  ></IconInput>
                </div>
                <h3>Privacy</h3>
                <div tw="flex w-full justify-start gap-4">
                  {privacys.map((i) => (
                    <IconInput
                      type="radio"
                      key={i}
                      value={i}
                      {...register('privacy')}
                      sufixElement={<a tw="font-normal">{i}</a>}
                    ></IconInput>
                  ))}
                </div>
                <h3 tw="font-medium">Tag your social</h3>
                <h4 tw="font-normal">
                  Pick tags for our curation engine to work its magin
                </h4>
                <Controller
                  control={control}
                  rules={{
                    maxLength: 100,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TagPicker
                      onChange={(list) => onChange(list)}
                      values={tags}
                    ></TagPicker>
                  )}
                  name="lastName"
                />
              </section>
              <button
                tw="border-none py-2 rounded bg-[#FEF452] text-[#942F70]"
                onClick={handleSubmit(onSubmit)}
              >
                Create social
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
