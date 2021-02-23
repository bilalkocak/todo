import React from 'react';
import {Layout as AntdLayout, Result, Button, BackTop} from 'antd';
import {Route, Switch, useHistory} from 'react-router-dom';
import Collections from "../Page/Collections/Collections";
import Detail from "../Page/Detail/Detail";
import {AreaChartOutlined} from "@ant-design/icons";

import './Layout.scss'
import Dashboard from "../Page/Dashboard/Dashboard";

const {Header, Content} = AntdLayout;

const Layout = () => {
    const history = useHistory();
    return (
        <AntdLayout className="customLayout">
            <Header>
                <div className={'header'}>
                    <div>
                        <div className={'headerItem'} onClick={() => history.push('/')}><AreaChartOutlined/> Dashboard
                        </div>
                        <div className={'headerItem'} onClick={() => history.push('/collection')}>Collections</div>
                    </div>
                </div>
            </Header>
            <Content className={"layoutContent"}>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/collection" exact component={Collections}/>
                    <Route path="/collection/detail/:id" exact component={Detail}/>
                    <Route render={() => <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button onClick={() => history.push('/')} type="primary">Back Home</Button>}
                    />}/>
                </Switch>
                <BackTop/>
            </Content>
        </AntdLayout>
    );
};

export default Layout;
