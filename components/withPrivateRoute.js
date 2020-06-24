import React from 'react'
import Router from 'next/router'
import { auth } from '../firebase/config'

const login = '/sign-in'

const checkUserAuthentication = () => {
  return auth.currentUser
}

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.getInitialProps = async ({ res }) => {
    const user = await checkUserAuthentication()

    if (user === null) {
      if (res) {
        res.writeHead(302, {
          Location: login
        })
        res.end()
      } else {
        await Router.replace(login)
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(user)
      return { ...wrappedProps, user }
    }

    return { user }
  }

  return hocComponent
}
