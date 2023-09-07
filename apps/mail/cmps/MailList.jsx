import { MailPreview } from './MailPreview.jsx'


export function MailList({ emails, filterBy, markMail }) {
    return (
        <React.Fragment>
            <table className="mails-container">
                {emails.map(email =>
                    <tbody key={email.id}>
                        <MailPreview email={email} filterBy={filterBy} markMail={markMail}/>
                    </tbody>)}
            </table>
        </React.Fragment >
    )
}
