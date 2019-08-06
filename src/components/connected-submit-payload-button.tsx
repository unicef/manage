import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCloseSectionBackendPayload } from 'selectors/close-section-payload';
import { ConfirmButton } from './buttons';
import { onSubmitCloseSection } from 'pages/close-summary/actions';
import { useAppService } from 'contexts/app';

const ConnectedConfirmButton: React.FC = () => {

    const backendPayload = useSelector(getCloseSectionBackendPayload);
    const { sectionsService } = useAppService();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        onSubmitCloseSection(sectionsService, backendPayload, dispatch);
    };

    return (
        <ConfirmButton onClick={handleSubmit}>Confirm</ConfirmButton>
    );
};

export default ConnectedConfirmButton;
