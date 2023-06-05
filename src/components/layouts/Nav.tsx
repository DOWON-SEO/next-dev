import styled from "styled-components";
import Link from 'next/link';

const navData = [
    {
        title: "Start",
        contents: [
            {
                index: "Main",
                href: "/"
            },
            {
                index: "About",
                href: "/about"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            },
            {
                index: "Installation",
                href: "#"
            }
        ]
    }
]

export default function Nav() {
    return (
        <Navbar>
            {
                navData.map(data => {
                    return (
                        <div>
                            <Title>{data.title}</Title>
                            {
                                data.contents.map(content => {
                                    return (
                                        <Content>
                                            <Link href={content.href}>
                                                <LinkText>
                                                    {content.index}
                                                </LinkText>
                                            </Link>
                                        </Content>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </Navbar>
    )
}

const Navbar = styled.div`
    position:fixed;
    top: 64px;
    left: 0;
    overscroll-behavior: contain;
    overflow-y: scroll;
    height: calc(100vh - 64px);
    background-color: white;
    width: 240px;
    background-color: aliceblue;
    padding: 12px 40px;
`

const Title = styled.div`
    padding: 16px 0px;
    border-bottom: 1px solid rgb(229,229,229);
`

const Content = styled.div`
    padding: 12px 0px;
`

const LinkText = styled.span`
        color: #999;
    :hover {
        color: #666;
    }
`