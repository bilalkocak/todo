import React from 'react';
import {Layout as AntdLayout} from 'antd';
import './Layout.scss'

const {Header, Content} = AntdLayout;

const Layout = () => {
    return (
        <AntdLayout className="customLayout">
            <Header>
                <div className={'header'}>
                    <div>dashboard</div>
                    <div>profil</div>
                </div>
            </Header>
            <Content className={"layout-content"}>
sadasd
            </Content>
        </AntdLayout>
    );
};

export default Layout;
