import * as React from 'react'

export const Header = () => {
    return <div className="p-2 flex justify-between items-center mx-auto max-w-[620px] border-b-[1px] border-b-gray-400">
        <div className="logo">Pomofocus</div>
        <div className="actions flex gap-2">
            <button className="p-2 bg-blue-500">Report</button>
            <button className="p-2 bg-blue-500">Settings</button>
            <button className="p-2 bg-blue-500">Sign in</button>
        </div>
    </div>
}