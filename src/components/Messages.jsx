import Message from "./Message";

const Messages = () => {
    return (
        <div className="d-flex flex-col-reverse justify-content-end overflow-hidden">
            <div className="d-flex flex-row messages gap-3">
            <Message user={true}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptas iure sequi voluptatum, accusantium fugit reiciendis iusto quaerat dolorem 
                ducimus quos temporibus, nisi qui unde soluta eligendi at perspiciatis. Eum!</p>
            </Message>
            <Message user={false}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptas iure sequi voluptatum, accusantium fugit reiciendis iusto quaerat dolorem 
              ducimus quos temporibus, nisi qui unde soluta eligendi at perspiciatis. Eum!</p>
            </Message>
            </div>
        </div>
    )
}
export default Messages;