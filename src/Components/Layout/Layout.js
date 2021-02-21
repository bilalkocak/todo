import React from 'react';
import {Layout as AntdLayout, Result, Button} from 'antd';
import {Route, Switch, useHistory} from 'react-router-dom';
import Collections from "../Page/Collections/Collections";
import Detail from "../Page/Detail/Detail";

import './Layout.scss'

const {Header, Content} = AntdLayout;

const Layout = () => {
    const history = useHistory();
    return (
        <AntdLayout className="customLayout">
            <Header>
                <div className={'header'}>
                    <div>dashboard</div>
                    <div>profil</div>
                </div>
            </Header>
            <Content className={"layoutContent"}>
                <Switch>
                    <Route path="/" exact component={Collections}/>
                    <Route path="/detail/:id" exact component={Detail}/>
                    <Route render={() => <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button onClick={() => history.push('/')} type="primary">Back Home</Button>}
                    />}/>
                </Switch>
            </Content>
        </AntdLayout>
    );
};

export default Layout;
