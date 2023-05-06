import { useState } from "react";
import { sender as senderImg ,user as userImg} from "../assets/images/getImages";


const Message = ({user,children}) => {
    return (
        <div className={`message d-flex align-items-start  ${user && 'reverse'} `}>
            {/* img  */}
                <div className="user-img d-flex align-items-center justify-content-center"> 
                    <img src={user ? userImg : senderImg} alt="user-image" className="img-fluid" />
                </div>
            {/* message  */}
            <div className="msg-text">
                {children}
            </div>
        </div>
    )
}

export default Message;