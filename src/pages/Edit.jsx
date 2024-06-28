import { useParams, useNavigate } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    usePageTitle(`${params.id}번 일기 수정`);

    const onClickDelete = () => {
        if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
            // true 일기 삭제 로직
            onDelete(params.id);
            nav('/', { replace: true });
            // replace: true : 뒤로가기 방지
        }
    };

    const onSubmit = (input) => {
        if (window.confirm('일기를 정말 수정할까요?')) {
            // true 일기 수정 로직
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav('/', { replace: true });
            // replace: true : 뒤로가기 방지
        }
    };

    return (
        <div>
            <Header
                title={'일기 수정하기'}
                leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로가기'} />}
                rightChild={<Button onClick={onClickDelete} text={'삭제하기'} type={'NAGATIVE'} />}
            />
            <Editor onSubmit={onSubmit} initData={curDiaryItem} />
        </div>
    );
};

export default Edit;
