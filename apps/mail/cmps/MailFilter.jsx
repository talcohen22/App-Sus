const { useNavigate, useParams } = ReactRouterDOM

export function MailFilter({onSetFilterBy}) {

    const navigate = useNavigate()
    const params = useParams()

    function onSubmitSearch(ev) {
        ev.preventDefault()
        
        const [ searchKey, isShowUnread ] = [ ev.target.searchBy.value, ev.target.isShowUnread.checked ]
        navigate(`/mail/search/${searchKey}`)
        onSetFilterBy(searchKey)
    }

    return (
        <section className="mail-filter">
            <form action="" className="filter-by-form" onSubmit={onSubmitSearch}>
                <div className="search-mail-container">
                    <label htmlFor=""><i className="fa-solid fa-magnifying-glass"></i></label>
                    <input className="search-mail" type="text" placeholder="Search mail" name="searchBy" />
                </div>
                <label htmlFor="" >Show unread messages</label>
                <input type="checkbox" name="isShowUnread"/>
            </form>
        </section>
    )
}