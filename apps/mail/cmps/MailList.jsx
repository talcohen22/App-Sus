import { MailPreview } from './MailPreview.jsx'


export function MailList({ emails, filterBy, markMail }) {
    return (
        <div className='table-container'>
            <table className="mails-container">
                <tbody >
                    {emails.map(email =>
                        <MailPreview key={email.id} email={email} filterBy={filterBy} markMail={markMail} />
                    )}
                </tbody>
            </table>
        </div >
    )
}
