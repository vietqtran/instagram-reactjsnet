import { FaRegCopyright } from 'react-icons/fa6'
import Link from 'next/link'
import React from 'react'
import SuggestItem from './SuggestItem'

function SuggestContainer() {
  return (
    <div className="float-right w-full pl-28 pr-10 text-[11px]">
      <div className="mb-3 mt-6 flex items-center justify-between font-semibold">
        <span className="text-[13px] text-gray-500">Suggested for you</span>
        <Link href={'/e/people'} className="hover:text-gray-500">
          See All
        </Link>
      </div>
      <SuggestItem />
      <SuggestItem />
      <SuggestItem />
      <SuggestItem />
      <SuggestItem />
      <div className="mt-9 text-gray-400">
        <p>
          <Link className="hover:underline" href={''}>
            About
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Help
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Press
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            API
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Jobs
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Privacy
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Terms
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Locations
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Language
          </Link>
          <span> . </span>
          <Link className="hover:underline" href={''}>
            Meta Verified
          </Link>
        </p>
        <p className="mt-3 flex items-center">
          <FaRegCopyright />{' '}
          <span className="ml-2">2023 INSTAGRAM FROM VIETQTRAN</span>
        </p>
      </div>
    </div>
  )
}

export default SuggestContainer
