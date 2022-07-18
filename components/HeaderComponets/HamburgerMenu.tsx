import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const HamburgerMenu = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <div className="cursor-pointer md:hidden">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="focus:shadow-outline-blue inline-flex w-10 justify-center rounded-md border border-gray-800 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-gray-300 focus:outline-none active:bg-gray-50 active:text-gray-800">
                <span>
                  <MenuIcon className="h-6" />
                </span>
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 mt-2 w-56 origin-top-right cursor-default divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
              >
                {session ? (
                  <div className="flex justify-between">
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5">Signed in as</p>
                      <p className="truncate text-sm font-medium leading-5 text-gray-900">
                        {session?.user?.name}
                      </p>
                    </div>
                    <div className="mt-4 mr-3">
                      <Image
                        src={session?.user?.image!}
                        width={30}
                        height={30}
                        objectFit="contain"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                ) : (
                  <Menu.Item>
                    {({ active }: any) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                          signIn()
                        }}
                      >
                        Sign In
                      </button>
                    )}
                  </Menu.Item>
                )}

                {session ? (
                  <>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push('/')}
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                          >
                            Home
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#support"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        as="span"
                        disabled
                        className="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                      >
                        New feature (soon)
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#license"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                              signOut()
                            }}
                          >
                            Sign Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default HamburgerMenu
