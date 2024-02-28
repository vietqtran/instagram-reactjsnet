'use client'

import React, { useEffect, useMemo, useState } from 'react'

import HomeLayout from '@components/layouts/HomeLayout'
import TabNav from '@pages/User/TabNav'
import UserPreviewTop from '@components/common/User/UserPreviewTop'
import { UserDetail } from '@type/responseModel/userDetail'
import { getUserByUsername } from '@utils/api/userApi'
import { usePathname } from 'next/navigation'
import BadRequest404 from '@components/Error/BadRequest404'
import UserContext from '@components/context/UserContext'
interface UserLayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: Readonly<UserLayoutProps>) {
  const [user, setUser] = useState<UserDetail>()
  const pathname = usePathname()?.split('/')
  const username = pathname?.at(pathname.indexOf('u') + 1)

  useEffect(() => {
    const fetchUser = async () => {
      const data: UserDetail = await getUserByUsername(username ?? '').then(
        (res: any) => {
          return res
        }
      )
      console.log(data)
      if (data) {
        setUser(data)
      }
    }

    fetchUser()
  }, [username])

  if (!user) {
    return <BadRequest404 />
  }

  return (
    <HomeLayout>
      <div className="flex justify-center py-8 md:px-5">
        <div className="w-full max-w-[935px] px-5 md:px-0">
          <UserPreviewTop user={user} />
          <TabNav />
          {children}
        </div>
      </div>
    </HomeLayout>
  )
}
