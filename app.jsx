
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import {HomePage} from './pages/HomePage.jsx'
import { EmailApp } from './pages/EmailApp.jsx' 
import { NoteApp } from './pages/NoteApp.jsx' 
import { BookApp } from './pages/BookApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'



export function App() {

    return (
        <Router>
                <AppHeader />
            <main>
                <Switch>
                    <Route component={EmailApp} path="/email" />
                    <Route component={NoteApp} path="/notes" />
                    <Route component={BookApp} path="/books" /> 
                    <Route component={HomePage} path="/" />
                </Switch>
            </main>
                <AppFooter />
        </Router>
    )
}