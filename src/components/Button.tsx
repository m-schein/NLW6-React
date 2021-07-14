import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
   return (
       <button className="button" {...props}/> //pega as propriedades passadas como parâmetro para adicionar no rótulo do botão
   )
}