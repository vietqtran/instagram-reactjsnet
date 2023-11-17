import FacebookProvider from 'next-auth/providers/facebook'
import NextAuth from 'next-auth'

export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        })
    ]
})