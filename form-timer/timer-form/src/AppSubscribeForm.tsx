import './AppSubscribeForm.css';
import {SyntheticEvent, useState} from "react";

export interface AppSubscribeFormAttributes {
    userName?: string; // ? -> permet de rendre l'attribut optionnel
    password?: string;
    secure?: boolean;
}


function AppSubscribeForm(attributes: AppSubscribeFormAttributes) {
    const [userName , setUserName] = useState(""); //useState permet de créer une variable d'état
    const [password , setPassword] = useState(""); //useState permet de créer une variable d'état

    const handleChangeName = (event: SyntheticEvent<HTMLInputElement>) => {
        console.log(event);
        setUserName(event.currentTarget.value); //permet de recupérer la valeur de l'input
    }

    const handleChangePassword = (event: SyntheticEvent<HTMLInputElement>) => {
        console.log(event);
        setPassword(event.currentTarget.value); //permet de recupérer la valeur de l'input
    }

    return (
        <form>
            <div>
                <input type={"text"} placeholder="name" onChange={handleChangeName} />
            </div>

            <div>
                <input type={"text"}  placeholder="pwd" onChange={handleChangePassword} />
            </div>

            <div>
                <p>Salut {userName}</p>
            </div>
        </form>
    )
}

export default AppSubscribeForm;