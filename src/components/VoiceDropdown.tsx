import {Fragment, useEffect, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from "@heroicons/react/20/solid"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function VoiceDropdown() {
    const [voices, setVoices] = useState<any[]>();
    const [selectedGender, setSelectedGender] = useState<string>("male");
    const [selectedLang, setSelectedLang] = useState<string>("American");
    const [selectedVoice, setSelectedVoice] = useState<string>("Mike");

    useEffect(() => {
        fetch('https://api.trending-trawler.com/voices', {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => setVoices(data))
            .catch(error => console.log(error))
    }, []);

    console.log(voices);
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {selectedGender}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {voices &&
                                Object.keys(voices).map((key) => (
                                    <Menu.Item key={key}>
                                        {({ active }) => (
                                            <div className="relative">
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => setSelectedGender(key)}
                                                >
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                </a>
                                            </div>
                                        )}
                                    </Menu.Item>
                                ))
                            }

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {selectedLang}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {selectedGender && voices &&
                                voices[selectedGender as unknown as number].map((obj: {}) =>
                                    Object.keys(obj).map((key) => (
                                        <Menu.Item key={key}>
                                            {({ active }) => (
                                                <div className="relative">
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        onClick={() => setSelectedLang(key)}
                                                    >
                                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                                    </a>
                                                </div>
                                            )}
                                        </Menu.Item>
                                    ))
                                )
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {selectedVoice}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {selectedGender && selectedLang && voices && voices[selectedGender as unknown as number] && voices[selectedGender as unknown as number].map((obj: { [x: string]: any[]; }) => (
                                obj[selectedLang] && obj[selectedLang].map((item) => (
                                    <Menu.Item key={item.id}>
                                        {({ active }) => (
                                            <div className="relative">
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => setSelectedVoice(item.name)}
                                                >
                                                    {item.name}
                                                </a>
                                            </div>
                                        )}
                                    </Menu.Item>
                                ))
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
