import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Page } from './components/base/base'
import { TopBar } from './components/TopBar'
import { GlobalStyle } from './global/GlobalStyle'
import { Balance } from './pages/Balance'
import { NotificationsList } from './components/Transactions/History'

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/balance" component={Balance} />
          <Redirect exact from="/" to="/balance" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>
  )
}
