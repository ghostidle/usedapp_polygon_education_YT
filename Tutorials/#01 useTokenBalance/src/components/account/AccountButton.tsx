import React, { useEffect, useState, useCallback  } from 'react'
import { useEthers, shortenAddress, useLookupAddress} from '@usedapp/core'
import { Button } from '../base/Button'
import { Colors } from '../../global/styles'
import styled from 'styled-components'

import { Dispatch } from '@reduxjs/toolkit'

import { AccountModal } from './AccountModal'

export const AccountButton = () => {
  const { account, deactivate, activateBrowserWallet, dispatch } = useEthers()
  const ens = useLookupAddress()
  const [showModal, setShowModal] = useState(false)
  
  const [activateError, setActivateError] = useState('')
  const { error } = useEthers()
  const { chainId } = useEthers()
  



  
  useEffect(() => {
    if (error) {
      setActivateError(error.message)
    }
  }, [error])
  
 
  const activate = async () => {
    setActivateError('')
    activateBrowserWallet()
  }
  
  const logout = async () => {
    deactivate()
  }
  
  
  
  

   return (
    <Account>
      <ErrorWrapper>{activateError}</ErrorWrapper>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      {account ? (
        <>
          <AccountLabel onClick={() => setShowModal(!showModal)}>{ens ?? shortenAddress(account)}</AccountLabel>
          <LoginButton onClick={() => deactivate()}>Disconnect</LoginButton>
        </>
      ) : (
        <LoginButton onClick={activate}>Connect</LoginButton>
      )}
    </Account>
  )
}



const ErrorWrapper = styled.div`
  color: #ff3960;
  margin-right: 40px;
  margin-left: 40px;
  overflow: auto;
`

const Account = styled.div`
  display: flex;
  align-items: center;
`

const LoginButton = styled(Button)`
  background-color: ${Colors.Yellow[100]};
`

const AccountLabel = styled(Button)`
  height: 32px;
  margin-right: -40px;
  padding-right: 40px;
  padding-left: 8px;
  background-color: ${Colors.Yellow[100]};
  font-size: 12px;
`
