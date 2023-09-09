import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { MailFeatures } from '../cmps/MailFeatures.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'

const { useEffect, useState, useRef } = React
const { useNavigate, useParams } = ReactRouterDOM

export function MailIndex() {

    const params = useParams()
    const [emails, setEmails] = useState(null)
    const [filterBy, setFilterBy] = useState({ mailType: params.mailType, searchKey: params.searchKey })
    const [countUnreadMessages, setCountUnreadMessages] = useState(0)
    const [isNewMsgModalOpen, setIsNewMsgModalOpen] = useState(false)
    const isEmailMarked = useRef(false)
    const navigate = useNavigate()
    let [menuOpen, setMenuOpen] = useState('')

    useEffect(() => {
        mailService.query(filterBy).then(emails => {
            setEmails(emails)
            mailService.getCountUnreadMessages().then(setCountUnreadMessages)
        })
    }, [filterBy, isNewMsgModalOpen, menuOpen])

    function onSetMailsType(type) {
        isEmailMarked.current = false
        setFilterBy({ ...filterBy, mailType: type })
        mailService.setAllEmailsMarked().then(() => navigate(`/mail/${type}`))
    }

    function openNewMsgModal(isOpen) {
        setIsNewMsgModalOpen(isOpen)
    }

    function sendMail(ev) {
        navigate(`/mail/${filterBy.mailType}`)

        const email = ev.target.email.value
        const subject = ev.target.subject.value
        const body = ev.target.body.value
        const newMail = mailService.createEmail(email, subject, body)

        mailService.post(newMail).then(() => {
            setIsNewMsgModalOpen(false)
        })
    }

    function markMail() {
        isEmailMarked.current = mailService.isEmailsMark(emails)
    }

    function onRemoveEmails() {
        if (params.mailType === 'trash') {
            const userSure = confirm('Delete forever?')
            if (!userSure) return
        }
        if (params.mailType === 'inbox' || params.mailType === 'sent' || params.mailType === 'trash') {
            mailService.removeEmails().then(() => {
                setFilterBy({ ...filterBy })
            })
        }
    }

    function onSetFilterBy(newFilterBy) {
        if (newFilterBy.searchKey) setFilterBy({ searchKey: newFilterBy.searchKey, isShowUnread: filterBy.isShowUnread })
        if (newFilterBy.isShowUnread !== null && newFilterBy.isShowUnread !== undefined) {
            filterBy.isShowUnread = newFilterBy.isShowUnread
            setFilterBy({ ...filterBy })
        }
    }

    function onSortBy({ target }) {
        setFilterBy({...filterBy , sortBy: target.value})
    }

    function toggleMenu() {
        (menuOpen === '') ? setMenuOpen('menu-open') : setMenuOpen('')
    }

    if (!emails) return
    return (
        <section className='mail-index-container' >
            <div className='mail-filter'>
                <MailFilter onSetFilterBy={onSetFilterBy} toggleMenu={toggleMenu} onSortBy={onSortBy} />
            </div>
            <div className="mails-body">
                <MailFeatures onSetMailsType={onSetMailsType} openNewMsgModal={openNewMsgModal} countUnreadMessages={countUnreadMessages} menuOpen={menuOpen} />

                <MailList emails={emails} filterBy={filterBy} markMail={markMail} />

                {isNewMsgModalOpen && <MailCompose openNewMsgModal={openNewMsgModal} sendMail={sendMail} />}

                <div className='more-options'>
                    {(isEmailMarked.current === true) && <i className="fa-solid fa-trash-can" onClick={onRemoveEmails}></i>}
                </div>
            </div>
        </section>
    )
}

