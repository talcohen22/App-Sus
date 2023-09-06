import { MailPreview } from './MailPreview.jsx'


export function MailList({ emails }) {
    console.log(emails);

    return (
        <React.Fragment>
            <ul className="mails-container">
                {emails.map(email =>
                    <li key={email.id}>
                        <MailPreview email={email} />
                    </li>)}
            </ul>
        </React.Fragment >
    )
}
