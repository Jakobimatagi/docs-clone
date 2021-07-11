import React from 'react'
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon'

function Header() {
    return (
        <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className=" md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl" />
            </Button>

            <Icon 
                name="description"
                size="5xl"
                color="blue"
            />
            <h1 className="  ml-2 text-gray-700 text-2xl">Docs</h1>

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 
            rounded-lg">
                <Icon
                    name="search"
                    size="3xl"
                    color="gray"
                />
                <input 
                    type="text"
                    placeholder="Search"
                    className="flex-grow px-5 text-base bg-transparent outline-none selection:bg-white"
                />
            </div>
        </div>
    )
}

export default Header