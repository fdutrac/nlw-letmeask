import { ButtonHTMLAttributes } from 'react';
import './Button.scss'

// import { Container } from './styles';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export function Button(props: ButtonProps) {
  return (        
    <button className="button" {...props}>

    </button>
  )
}
