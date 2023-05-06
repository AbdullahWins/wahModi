import { useEffect, useRef } from "react";
import { sender as senderImg ,user as userImg} from "../assets/images/getImages";


const Message = ({user, message}) => {
    console.log(user, message);
    const scrollRef = useRef();

    // on element increase it's autometically scroll down
  
    useEffect(() => {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });
    return (
        <div className={`message d-flex align-items-start  ${user && 'reverse'} `} ref={scrollRef}>
            {/* img  */}
                <div className="user-img d-flex align-items-center justify-content-center"> 
                    <img src={user ? userImg : senderImg} alt="user-image" className="img-fluid" />
                </div>
            {/* message  */}
            <div className="msg-text">
                {message}
            </div>
        </div>
    )
}

export default Message;