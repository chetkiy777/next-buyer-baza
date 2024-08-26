

export default function Button({disabled, children, ...rest}) {
    return(
        <button
            className='mt-5 w-1/3 py-2.5 px-5 bg-gray-900 max-w-[200px] text-zinc-50 text-base text-center font-medium rounded hover:bg-white hover:text-gray-900 hover:border hover:border-black'
        >{children}</button>
    )
}