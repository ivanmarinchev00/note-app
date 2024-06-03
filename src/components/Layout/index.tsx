import { Flex, Grid, Layout, Typography } from 'antd';
import { ReactNode } from "react";
import '../../styles/layout.css';

const { Header, Content } = Layout;
const { Title } = Typography;

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();

    return (
        <Layout className="layout">
            <Header className="header">
                <Title level={2} className="title">Notes Application</Title>
            </Header>
            <Flex justify='center' align='center' vertical>
                <Content className={`content ${screens.xl ? 'content-xl' : 'content-default'}`}>
                    {children}
                </Content>
            </Flex>
        </Layout>
    );
}

export default AppLayout;