import clsx from "clsx";

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}

            className={clsx(disabled && 'opacity-25', className, 'inline-flex justify-center items-center px-4 py-2.5 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150')}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
