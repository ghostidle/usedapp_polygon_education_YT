/* Info: 0xGhost Dapp Education - How to show token Balance in wallet with useDapp on polygon */


/* Info: Using usedapp and ethersproject to get our data and show it */
import React from 'react'
import { formatEther, formatUnits } from '@ethersproject/units'
import { useEtherBalance, useEthers, useTokenBalance} from '@usedapp/core'

/* Info: UI requirements */
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import { Text } from '../typography/Text'
import { Center } from '@chakra-ui/layout'

/* Info: Wallet Account Button */
import { AccountButton } from '../components/account/AccountButton'

/* Info: Contracts this example uses the Bone_headz NFT and the Shib token as well as showing your matic balance */
const BONEZNFT = '0x105e31a9e7058c2827cd56f84403f4f9cf1ff7e5'
const SHIB = '0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec'


export function Balance() {
  const { account } = useEthers()
  const userBalance = useEtherBalance(account)

  const shibBalance = useTokenBalance(SHIB, account)
  const boneznftBalance = useTokenBalance(BONEZNFT, account)
  
  return (
    <MainContent>
	
	  <Container>
        <Section>
          <SectionRow>
            <Title>Balance</Title>
          </SectionRow>
		  
			<SectionRow>
				<ContentBlock>
					<ContentRow>
						<Text><Center>This is your Balance Page here you can find the contents of your wallet.</Center>	 </Text>
					</ContentRow>

					<ContentRow>
						<Text><Center>Make sure you are connected to the Polygon Network!</Center></Text>
					</ContentRow>
				</ContentBlock>
			</SectionRow>
		  
		{shibBalance && (
            <ContentBlock>
				<ContentRow>
					<Center><Label>Account: </Label> <TextInline> {account} </TextInline></Center>
                </ContentRow>
   
                <ContentRow>
					<Label>Matic balance:</Label> <TextInline>{formatEther(userBalance)}</TextInline>
                </ContentRow>

                <ContentRow>
					<Label>Bonez NFT Balance: </Label>
					<TextInline>{formatUnits(boneznftBalance, 0)} </TextInline>
                </ContentRow>

				<ContentRow>
					<Label>Shib Balance: </Label>
					<TextInline>{formatUnits(shibBalance, 18)} </TextInline>
				</ContentRow>
			</ContentBlock>
				)}
		   
        </Section>
      </Container>
    </MainContent>
  )
}

