const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './views/About.jsx'
import { Home } from './views/Home.jsx'
import { MailIndex } from './apps/mail/views/MailIndex.jsx'
import { MailDetails } from './apps/mail/views/MailDetails.jsx'
import { NoteIndex } from './apps/note/views/NoteIndex.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mail/:mailType" element={<MailIndex />} />
                    <Route path="/mail/:mailType/:emailId" element={<MailDetails />} />
                    <Route path="/note" element={<NoteIndex />} />
                    <Route path="/mail/search/:searchKey" element={<MailIndex />}></Route>
                    <Route path="/mail/search/:searchKey/:isUnread" element={<MailIndex />}></Route>
                </Routes>
            </section>
        </Router>
    )
}
