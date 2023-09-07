
const { useParams } = ReactRouterDOM

export function MailFeatures({ openNewMsgModal, countUnreadMessages, onSetMailsType }) {

    const tab = useParams().mailType

    return (
        <aside className="features">
            <div className="compose-feature" onClick={() => openNewMsgModal(true)}>
                <p>Copmose</p>
                <i className="fa-solid fa-pencil" ></i>
            </div>
            <div onClick={() => onSetMailsType('inbox')} className={tab==='inbox' ? "active" : ""}>
                <p>inbox</p>
                <i className="fa-regular fa-envelope"></i>
                {countUnreadMessages > 0 && <span className="unread-messages">{countUnreadMessages ? countUnreadMessages : ''}</span>}
            </div>
            <div>
                <p>Starred</p>
                <i className="fa-regular fa-star"></i>
            </div>
            <div onClick={() => onSetMailsType('sent')} className={tab==='sent' ? "active" : ""}>
                <p>Sent</p>
                <i className="fa-regular fa-paper-plane"></i>
            </div>
            <div onClick={() => onSetMailsType('trash')} className={tab==='trash' ? "active" : ""}>
                <p>Trash</p>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </aside>
    )
}