import React from 'react'

const index = ({title='Link', link='/'}) => {
    return (
        <ol className="flex items-center space-x-2 text-gray-500">
            <li className="flex items-center">
                <a href={link} className="hover:text-blue-500">
                   {title}
                </a>
            </li>
            <li className="text-gray-300">/</li>
            <li>Show</li>
        </ol>
    )
}

export default index