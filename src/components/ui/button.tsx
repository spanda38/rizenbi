
import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; size?: 'sm'|'md'|'lg' };
export function Button({ children, size='md', className='', ...props }: Props) {
  const sizeClasses = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' }[size];
  return <button className={clsx('bg-blue-600 hover:bg-blue-700 text-white rounded', sizeClasses, className)} {...props}>{children}</button>;
}
