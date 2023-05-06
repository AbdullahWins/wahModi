import Form from "../components/Form";
import Messages from "../components/Messages";

const Conversation = () => {
    return (
        <section className="conversation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="chatbox d-flex flex-column justify-content-end">
                            <Messages />
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conversation;
