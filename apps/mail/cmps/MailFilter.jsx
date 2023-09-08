const { useNavigate, useParams } = ReactRouterDOM
const { useState , useRef} = React

export function MailFilter({ onSetFilterBy }) {

    let isShowUnread = useRef(false)
    const [searchKeyState, setSearchKeyState] = useState(null)
    
    const navigate = useNavigate()
    const params = useParams()

    function onSubmitSearch(ev) {
        ev.preventDefault()
        const searchKey = ev.target.searchBy.value
        ev.target.searchBy.value ? navigate(`/mail/search/${searchKey}/${isShowUnread.current}`) : params.mailType ? navigate(`/mail/${params.mailType}`) : navigate(`/mail/inbox`)
        onSetFilterBy({ searchKey })
        setSearchKeyState(searchKey ? searchKey : null)
    }

    function onSetIsShowUnread({ target }) {
        isShowUnread.current = target.checked
        navigate(`/mail/search/${searchKeyState}/${isShowUnread.current}`)
        onSetFilterBy({ isShowUnread: isShowUnread.current })
    }

    return (
        <section className="mail-filter">
            <form action="" className="filter-by-form" onSubmit={onSubmitSearch}>
                <div className="search-mail-container">
                    <label htmlFor=""><i className="fa-solid fa-magnifying-glass"></i></label>
                    <input className="search-mail" type="text" placeholder="Search mail" name="searchBy" />
                </div>
                <div className="unread-msg-filter">
                    <label htmlFor="" >{isShowUnread.current ? 'Show all messages' : 'Show unread messages'}</label>
                    <input type="checkbox" name="isShowUnread" onChange={onSetIsShowUnread} />
                </div>
            </form>
        </section>
    )
}