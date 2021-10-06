import { Header, Title, Mode } from './HeaderBar.Style'

const HeaderBar = () => (
    <Header className="container-fluid">
        <Title>
            <p className="title-text">Where in the world?</p>
        </Title>

        <Mode>
            <i className="fas fa-moon"></i>
            <p className="mode-text">Dark Mode</p>
        </Mode>
    </Header>
)

export default HeaderBar;