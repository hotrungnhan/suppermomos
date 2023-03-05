import axios from 'axios'

import Image from 'next/image'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import ImagePicker from '@/components/Image.Picker'
import Sinput from '@/components/Sinput'

import 'twin.macro'
import TagPicker from '@/components/Tag.Picker'
import 'react-toastify/dist/ReactToastify.css'

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
  const { register, handleSubmit, setValue } = useForm()
  useEffect(() => {
    register('tags', {
      value: [],
      required: true,
    })
    register('title', {
      value: '',
      required: true,
    })
    register('banner', {
      value: null,
      required: true,
    })
  }, [register])
  const onSubmitFieldValidationError = (data: any) => {
    console.log(data)
    const err = Object.entries(data).map(([key, data]: any) => {
      return (
        <div key={key + data.type} tw="text-red-700">
          <strong tw="font-bold">{key}</strong>
          {data.type == 'required' && (
            <strong tw="text-black font-light"> is required</strong>
          )}
        </div>
      )
    })
    toast.error(<div tw="w-full">{err}</div>)
  }
  const onSubmit = (data: any) => {
    data.startAt = new Date(data.startAtDate + ' ' + data.startAtTime + 'Z')
    delete data.startAtDate
    delete data.startAtTime
    axios
      .post('api/social', data)
      .then((req) => {
        toast.success('Create socials success !!!')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  return (
    <form tw="p-4 container mx-auto mt-16">
      <div tw="flex justify-between h-max gap-4">
        <section id="title" tw="relative w-[40%] overflow-visible mt-8">
          <div
            contentEditable
            onInput={(e) => setValue('title', e.currentTarget.innerText)}
            // eslint-disable-next-line react/no-children-prop
            children="untitle"
            suppressContentEditableWarning={true}
            tw="bg-none w-fit text-left min-w-[3rem] max-w-[110%] border-none outline-0 bg-[#942F70] text-white text-5xl font-bold"
          />
          <div tw="flex gap-2">
            <Sinput
              type="date"
              defaultValue="2023-03-01"
              {...register('startAtDate', {
                required: true,
              })}
              prefixElement={
                <Image
                  src="images/icon/calendar.svg"
                  alt="calendar"
                  fill
                  tw="relative!"
                />
              }
            />
            <Sinput
              type="time"
              defaultValue="12:00"
              {...register('startAtTime', {
                required: true,
              })}
              prefixElement={
                <Image
                  src="images/icon/clock.svg"
                  alt="clock"
                  fill
                  tw="relative!"
                />
              }
            />
          </div>
          <Sinput
            prefixElement={
              <Image
                src="images/icon/location.svg"
                alt="location"
                fill
                tw="relative!"
              />
            }
            defaultValue="Chelsea Market (163 W 20nd Street). Manhattan, NYC"
            {...register('venue', {
              required: true,
            })}
          />
          <div tw="flex gap-2">
            <Sinput
              type="number"
              defaultValue={50}
              {...register('capacity', {
                required: true,
              })}
              prefixElement={
                <Image
                  src="images/icon/people.svg"
                  alt="people"
                  fill
                  tw="relative!"
                />
              }
            />
            <Sinput
              type="number"
              defaultValue={30}
              {...register('price')}
              prefixElement={
                <Image
                  src="images/icon/dolar.svg"
                  alt="dolar"
                  fill
                  tw="relative!"
                />
              }
            />
          </div>
        </section>
        <ImagePicker
          tw="w-[60%]"
          values={banners}
          onChange={(banner) => {
            console.log(banner)

            setValue('banner', banner)
          }}
        />
      </div>
      <div tw="w-[60%] rounded-2xl flex flex-col gap-4 ">
        <section id="description" tw="flex flex-col">
          <h3>Description</h3>
          <textarea
            {...register('description', {
              required: true,
            })}
            placeholder="Description of your event.."
            tw="h-96 p-2 rounded-xl border outline-0"
          ></textarea>
        </section>
        <section id="settings" tw="flex flex-col bg-white p-8 rounded-xl">
          <h3 tw="bg-[#FEF452] text-[#942F70] w-fit px-2 py-2 font-bold text-2xl">
            Setting
          </h3>
          <div tw="flex">
            <Sinput
              tw="w-fit"
              type="checkbox"
              {...register('isManualApprove')}
              defaultChecked
              sufixElement={
                <strong tw="font-medium">I want to approve attendees</strong>
              }
            ></Sinput>
          </div>
          <h3>Privacy</h3>
          <div tw="flex w-full justify-start gap-4">
            {privacys.map((i) => (
              <Sinput
                type="radio"
                key={i}
                value={i}
                {...register('privacy', {
                  required: true,
                })}
                sufixElement={<strong tw="font-normal">{i}</strong>}
              ></Sinput>
            ))}
          </div>
          <h3 tw="font-medium">Tag your social</h3>
          <h4 tw="font-normal">
            Pick tags for our curation engine to work its magin
          </h4>
          <TagPicker
            onChange={(list) => setValue('tags', list)}
            values={tags}
          />
        </section>

        <button
          tw="border-none py-2 rounded bg-[#FEF452] text-[#942F70]"
          onClick={handleSubmit(onSubmit, onSubmitFieldValidationError)}
        >
          Create social
        </button>
      </div>
    </form>
  )
}
