import { ButtonHTMLAttributes } from 'react'

type ButtonProps = Partial<ButtonHTMLAttributes<HTMLElement>>

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props
  return (
    <button
      {...restProps}
      className={`px-2 py-1 border rounded bg-slate-100 ${restProps.className}`}
    >
      {children}
    </button>
  )
}

export default Button
