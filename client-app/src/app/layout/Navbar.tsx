import { Button, Container, Menu } from "semantic-ui-react";


interface Props {
    onFormOpen: () => void;
}
export default function NavBar({onFormOpen}:Props) {
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item header>
                    <img src="/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={onFormOpen} positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}