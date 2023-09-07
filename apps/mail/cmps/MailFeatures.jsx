
export function MailFeatures({openNewMsgModal, countUnreadMessages, onSetMailsType}){
    return (
        <aside className="features">
                <i className="fa-solid fa-pencil" onClick={() => openNewMsgModal(true)}></i>
                <div>
                    <i onClick={() => onSetMailsType('inbox')} className="fa-regular fa-envelope"></i>
                    {countUnreadMessages > 0 && <span className="unread-messages">{countUnreadMessages ? countUnreadMessages : ''}</span>}
                </div>
                <i className="fa-regular fa-star"></i>
                <i onClick={() => onSetMailsType('trash')} className="fa-solid fa-trash-can"></i>
                <i onClick={() => onSetMailsType('sent')} className="fa-regular fa-paper-plane"></i>
            </aside>
    )
}