import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    usePageTitle('새 일기 쓰기');

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav('/', { replace: true });
        // replace: true : 뒤로가기 방지
    };

    return (
        <div>
            <Header title={'새 일기 쓰기'} leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />} />
            {/* nav(-1) : 페이지 뒤로 이동시켜줌  */}
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;
