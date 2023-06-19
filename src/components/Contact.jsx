import React from 'react'

const Contact = ({children, onClick}) => {
    return (
        <div className="w-full fixed bottom-0 left-0 h-full z-50 flex items-center justify-center backdrop-blur-md backdrop-brightness-50">
            <div className="absolute bg-white w-5/6 m-auto max-w-md rounded-lg p-6">
                {children}
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={onClick}>
                    x
                </button>
            </div>
        </div>
    )
}

export default Contact