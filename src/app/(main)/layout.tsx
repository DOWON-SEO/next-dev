"use client"
import Header from "@/components/layouts/Header";
import Nav from "@/components/layouts/Nav";
import styled from "styled-components";


export default function Layout({children}:typeChildren) {
    return (
        <div>
            <Header/>
            <Flex>
                <Nav/>
                <Section>
                    {children}
                </Section>
            </Flex>
        </div>
    )
}

const Section = styled.section`
    margin-left: 240px;
    padding: 24px;
`

const Flex = styled.div`
    display: flex;
    margin-top: 64px;
`