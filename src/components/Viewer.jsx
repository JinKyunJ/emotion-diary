import { getEmotionImage } from '../util/get-emotion-image';
import { emotionList } from '../util/constants';
import React from 'react';
import './Viewer.css';

const Viewer = ({ emotionId, content }) => {
    const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

    return (
        <div className="Viewer">
            <section className="imgSection">
                <h4>오늘의 감정</h4>
                <div className={`emotionImgWrapper emotionImgWrapper_${emotionId}`}>
                    <img src={getEmotionImage(emotionId)} />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className="contentSection">
                <h4>오늘의 일기</h4>
                <div className="contentWrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
};

export default Viewer;
