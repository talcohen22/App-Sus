
export function NewEmail({ sendMail }) {

    function onSendMail(ev){
        ev.preventDefault()
        sendMail(ev)
    }

    return (
        <div className="new-message-container">
            <p>New Message</p>
            <form action="0" onSubmit={onSendMail}>
                <div>
                    <label htmlFor="">To</label>
                    <input required type="email" name="email" /> <br />
                </div>
                <div>
                    <label htmlFor="">Subject</label>
                    <input required type="text" name="subject" /><br />
                </div>
                <textarea id="" name="body"></textarea>
                <button className="send-btn">Send</button>
            </form>
            <button className="close-new-message" onClick={() => openNewMsgModal(false)}><i className="fa-solid fa-x"></i></button>
        </div>
    )
}