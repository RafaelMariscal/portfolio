import { ComponentProps } from 'react'

type CardRootProps = ComponentProps<'button'>

export default function CardRoot(props: CardRootProps) {
  return (
    <button
      type="button"
      {...props}
      className="
        relative block min-w-max cursor-default select-none overflow-hidden
        shadow-card outline-none max-tablets:max-w-fit 
        
        [&_>div]:hover:bg-[#062e24]/80 [&_>div]:focus:bg-[#062e24]/80
      
        [&_h3]:hover:left-0 [&_h3]:hover:top-0 [&_h3]:hover:w-[8.5rem]
        [&_h3]:hover:translate-x-0 [&_h3]:hover:translate-y-0 
        [&_h3]:after:hover:animate-[show-divider_300ms_ease-in-out_forwards_150ms]  
        
        
        [&_h3]:focus:left-0 [&_h3]:focus:top-0 [&_h3]:focus:w-[8.5rem]
        [&_h3]:focus:translate-x-0 [&_h3]:focus:translate-y-0
        [&_h3]:after:focus:animate-[show-divider_300ms_ease-in-out_forwards_150ms]  
        
        [&_p]:hover:h-fit [&_p]:hover:w-full 
        [&_p]:hover:animate-[show-text_300ms_ease-in-out_forwards_150ms]
        [&_p]:focus:h-fit [&_p]:focus:w-full 
        [&_p]:focus:animate-[show-text_300ms_ease-in-out_forwards_150ms]
      "
    />
  )
}
