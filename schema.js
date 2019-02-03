export default`

type Channel {
    owner: User!
    members: [User!]!
    posts: [Post!]!
}

type Post {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
}

type Message {
    id: Int!
    text: String!
    user: User!
    post: Post!
}

type User {
    id: Int!
    email: String!
    username: String!
    channels: [Channel!]!
  }
type Query {
    hello: String
}
`;