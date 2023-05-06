import { useContext } from "react";
import Message from "./Message.jsx"
import { AiContext } from "../contexts/AiContext";

const Messages = () => {
    const {modiMessages} = useContext(AiContext)

    return (
        <div className="d-flex flex-col-reverse justify-content-end overflow-hidden">
            <div className="d-flex flex-column messages gap-3">
                {
                    modiMessages?.map((modiMessage, i)=> {
                       return <Message key={i} user={modiMessage?.user} message={modiMessage?.message} ></Message>
                    })
                }
            
            </div>
        </div>
    )
}
export default Messages;