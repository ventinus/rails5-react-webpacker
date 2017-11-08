import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import {installRelayDevTools} from 'relay-devtools'

// import {
//   QueryRenderer,
//   graphql,
// } from 'react-relay'
// import {
//   Environment,
//   Network,
//   RecordSource,
//   Store,
// } from 'relay-runtime'

// // Useful for debugging, but remember to remove for a production deploy.
// installRelayDevTools()

const appNode = document.querySelector('#app')

// function fetchQuery(
//   operation,
//   variables,
// ) {
//   return fetch('/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables,
//     }),
//   }).then(response => {
//     return response.json()
//   })
// }

// const modernEnvironment = new Environment({
//   network: Network.create(fetchQuery),
//   store: new Store(new RecordSource()),
// })

// ReactDOM.render(
//   <QueryRenderer
//     environment={modernEnvironment}
//     query={graphql`
//       query allUsers {
//         users {
//           ...TodoApp_viewer
//         }
//       }
//     `}
//     variables={{}}
//     render={({error, props}) => {
//       if (props) {
//         return <App users={props.users} />
//       } else {
//         return <div>Loading</div>
//       }
//     }}
//   />,
//   appNode
// );

ReactDOM.render(<App />, appNode)
