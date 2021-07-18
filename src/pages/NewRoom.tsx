import { Link, useHistory } from 'react-router-dom'
import { FormEvent } from 'react'
import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import { useAuth } from '../hooks/useAuth'
import "../styles/auth.scss"
import "../styles/button.scss"
import { useState } from 'react'
import { database } from '../services/firebase'


export function NewRoom(){
    const { user } = useAuth();
    const history  = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms'); //dentro do db vai ter uma 'categoria' chamada rooms
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        }) //jogando a sala para dentro de rooms

        history.push(`/rooms/${firebaseRoom.key}`)
        console.log(newRoom)
    }
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letMeAsk"/>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={ event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <button type="submit" className="button"> 
                           Criar sala
                        </button>
                    </form>
                    <p>Quer entrar em uma sala existente?  
                        <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}