import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from './card';

interface DetailViewProps {
    items: any[]; // Replace with your specific item type
}

const DetailView: React.FC<DetailViewProps> = ({ items }) => {
    const { itemName } = useParams<{ itemName: string }>();
    const navigate = useNavigate();

    const decodedItemName = decodeURIComponent(itemName || '');
    const item = items.find(item => item.name === decodedItemName);

    const handleBackClick = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <div style={{
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: '#000'
        }}>


            <Card
                title={item.name}
                className={`${item.name} selected`}
                content={item.getDetailsContent()}
                hasLeaveButton={true}
                leaveButtonIMGContent={item.exitButtonIMG}
                backgroundImage={item.backgroundImage}
                onDeselect={handleBackClick}
                key={item.name}
            />
        </div>
    );
};

export default DetailView;
