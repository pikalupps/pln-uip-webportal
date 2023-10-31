import type { NextAuthOptions } from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials : {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Masukkan email"
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "Masukkan password"
        }
      },

      async authorize(credentials) {
        const user = {id: "1", email: "admin", password: "123"}

        if(credentials?.email === user.email && credentials.password === user.password){
          return user
        } else {
          return null
        }
      }
    })
  ],

  callbacks:{
    jwt({token, account, profile, user}){
      if(account?.provider === "credentials"){
        token.email = user.email
      }
      return token
    },

    async session({session, token}: any) {
      if("email" in token) {
        session.user.email = token.email;
      }
      return session
    }
  },

  pages: {
    signIn: "/login"
  }
}