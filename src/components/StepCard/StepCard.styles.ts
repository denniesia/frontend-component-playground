import { tv } from 'tailwind-variants';


export const stepCardStyles = tv({
  slots: {
    base: [
      'min-w-0',
      'w-full',
      'border',
      'border-border',
      'rounded-card',
      'bg-white',
      'py-6.5',
      'px-7',
    ],
    row: ['flex', 'items-start', 'gap-4.5'],
    marker: [
      'shrink-0',
      'flex',
      'h-10',
      'w-10',
      'items-center',
      'justify-center',
      'rounded-full',
      'bg-tertiary',
      'text-white',
      'font-display',
      'font-black',
      'text-[17px]',
    ],
    content: ['min-w-0', 'flex', 'flex-col', 'gap-1'],
    title: ['font-display', 'text-[17px]', 'font-extrabold'],
    text: ['text-[14px]', 'leading-relaxed', 'text-body'],
  },
});