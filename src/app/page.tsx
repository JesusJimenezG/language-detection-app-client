import { Inter } from '@next/font/google'
import styled from 'styled-components'

const Text = styled.h1`text-3xl`

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <Text>Hello World!</Text>
        </main>
    )
}
