export function NoteImg({ info }) {
    console.log('NoteImg info', info)
    return (
        <section>
            <img src={info.url} alt="" />
            <p>{info.title}</p>
        </section>
    )
}
