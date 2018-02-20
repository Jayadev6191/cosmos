import React from 'react'
import styled from 'styled-components'

import { PageHeader, List, Stack, Code, Button, ButtonGroup } from '../components'
import Avatar from './client-avatar'
import CreateClientDialog from './create-client-dialog'
import { colors } from '../tokens'
import { colors, spacing } from '../tokens'

const Link = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
`

const Type = styled.div`
  font-size: 12px;
  color: ${colors.base.grayDark};
  letter-spacing: 1px;
  line-height: normal;
  margin-top: ${spacing.xsmall};
  text-transform: uppercase;
`

const StyledLogo = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
`

const clients = [
  {
    id: 'autogenerated-id-goes-here',
    name: 'Clients One',
    type: 'NO TYPE'
  },
  {
    id: 'beep-beep-boop-boop',
    name: 'Clients Two',
    type: 'SINGLE PAGE APPLICATION'
  },
  {
    id: 'my-app-id',
    name: 'My App',
    type: 'NATIVE'
  },
  {
    id: 'test-app-id',
    name: 'Test App',
    type: 'NATIVE'
  }
]

class ClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  setDialogOpen = dialogOpen => () => {
    this.setState({ dialogOpen })
  }

  render() {
    return (
      <div>
        <PageHeader
          title="Clients"
          description={{
            text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
            learnMore: '/clients'
          }}
          actions={{
            primaryAction: {
              label: 'Create Client',
              icon: 'plus',
              method: this.setDialogOpen(true)
            },
            secondaryAction: { label: 'Tutorial', icon: 'play-circle', method: () => {} }
          }}
        />
        <List>
          {clients.map(client => (
            <Stack key={client.id} widths={[7, 25, 40, 28]}>
              <StyledLogo>
                <Avatar />
              </StyledLogo>
              <div>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
                <Type>{client.type}</Type>
              </div>
              <Stack align="left">
                <span>Client Id: </span>
                <Code>{client.id}</Code>
              </Stack>
              <Stack align="right">
                <ButtonGroup>
                  <Button icon="quickstarts" label="Quickstart" />
                  <Button icon="settings" label="Settings" />
                  <Button icon="code" label="Addons" />
                  <Button icon="connections" label="Connections" />
                </ButtonGroup>
              </Stack>
            </Stack>
          ))}
        </List>
        <CreateClientDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </div>
    )
  }
}

export default ClientList
