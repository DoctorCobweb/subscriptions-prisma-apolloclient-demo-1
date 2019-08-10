# server setup  
```javascript
cd server
yarn
yarn global add prisma
prisma init
```

// now select 'demo server', register with Prisma Cloud (where demo server is hosted), accept all default values. select prisma javascript client (if you have to)
`prisma deploy`

this should have setup a free and hosted demo db (AWS Aurora) available in Prisma Cloud. Read to now use Prisma client to read and writ to it from code

copy the endpoint of your prisma server to endpoint field in `server/prisma/prisma.yml`, if you need to. the uri comes from terminal info after running 'prisma deploy'

# client setup  
from root of project cd into 'client' folder  
`yarn`


#  start server and client
1. in one terminal tab navigate to 'server' folder, then `yarn start`
2. then in another terminal navigate to 'client' folder, the run `yarn start`

# subscription output
goto `localhost:3000` (or whereever the react client app is running) and checkout the console output in developer tools

in another browser tab goto the graphql playground `localhost:4000` (or wherever your server is running). make a mutation and see that the client app gets the results via its subscription outputted in its console in browser tab.

an example mutation:

```javascript
mutation {
  createDraft(title: "yyyyy", content: "hello hellooooooooo") {
    id
    createdAt
    published
    title
    content
  }
}
```


