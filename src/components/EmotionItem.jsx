import React from 'react';
import { getEmotionImage } from '../util/get-emotion-image';
import './EmotionItem.css';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
    return (
        <div onClick={onClick} className={`EmotionItem ${isSelected ? `EmotionItemOn_${emotionId}` : ''}`}>
            <img className="emotionImg" src={getEmotionImage(emotionId)} />
            <div className="emotionName">{emotionName}</div>
        </div>
    );
};

export default EmotionItem;
