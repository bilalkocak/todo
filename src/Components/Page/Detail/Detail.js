import React, {useEffect, useState} from 'react';
import {LeftOutlined} from "@ant-design/icons";
import './Detail.scss'
import {Typography} from "antd";
import {useHistory, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import TaskList from "../../TaskList/TaskList";
import {fetchCollectionById} from "../../../store/actions/collections";

const {Title} = Typography;

const Detail = () => {
    const history = useHistory()
    const {id} = useParams();
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.currentCollection)


    useEffect(() => {
        dispatch(fetchCollectionById(id))
    }, [])
    return (
        <div className={'detailContainer'}>
            <div className="detailHeader">
                <div className={'customButton backButton'} onClick={() => history.push('/')}>
                    <LeftOutlined/>
                </div>
                <Title level={3}>{collection?.name}</Title>
            </div>
            <TaskList/>
        </div>
    );
};

export default Detail;
