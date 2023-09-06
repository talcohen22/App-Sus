
export function NewEmail() {
    console.log("aaaa");

    return (
        <div className="new-message-container">
            <p>New Message</p>
            <form action="0">
                <div>
                    <label htmlFor="">To</label>
                    <input type="email" /> <br />
                </div>
                <div>
                    <label htmlFor="">Subject</label>
                    <input type="text" /><br />
                </div>
                <textarea name="" id=""></textarea>
            </form>
            <button className="close-new-message"><i className="fa-solid fa-x"></i></button>
            <button className="send-btn">Send</button>
        </div>
    )
}