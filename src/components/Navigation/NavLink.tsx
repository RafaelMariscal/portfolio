import clsx from 'clsx'

interface NavLinkProps {
  title: string
  currentState: string
  setState: (newState: string) => void
  prefetch?: boolean
}

export default function NavLink({
  title,
  currentState,
  setState,
}: NavLinkProps) {
  return (
    <li>
      <button
        onClick={() => setState(title)}
        className={clsx(
          'select-none font-semibold leading-none outline-none transition-all',
          {
            'text-cyan-400': currentState === title,
            'text-gray-300 hover:text-cyan-500 focus:text-cyan-500':
              currentState !== title,
          },
        )}
      >
        {title}
      </button>
    </li>
  )
}
