import { useContext } from "react";
import Message from "./Message.jsx"
import { AiContext } from "../contexts/AiContext";

const Messages = () => {
    const {modiMessages} = useContext(AiContext)
    return (
        <div className="d-flex flex-col-reverse justify-content-end overflow-hidden">
            <div className="d-flex flex-row messages gap-3">
                {
                    modiMessages?.map((modiMessage)=> {
                       return <Message user={modiMessage?.user} message={modiMessage?.message}></Message>
                    })
                }
            
            </div>
        </div>
    )
}
export default Messages;