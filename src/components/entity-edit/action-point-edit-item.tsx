import React from 'react';
import { EditItemProps, ModuleEntities } from 'entities/types';
import Box from 'components/box';
import { Typography } from '@material-ui/core';
import { Store } from 'slices/root-store';
import { useSelector, useDispatch } from 'react-redux';
import { useEditItemStyles } from './styles';
import clsx from 'clsx';
import { Dropdown, OptionType } from 'components/dropdown';
import { selectSectionsAsOptions } from 'selectors';
import { prop } from 'ramda';
import { ValueType } from 'react-select/src/types';
import { onSelectActionPointSection } from 'pages/close-section/actions';
import { getSelectedSection } from 'lib/sections';


const ActionPointEditItem: React.FC<EditItemProps> = ({ id }) => {
    const styles = useEditItemStyles();
    const dispatch = useDispatch();

    const sectionsAsOptions = useSelector(selectSectionsAsOptions);

    const {
        reference_number,
        description,
        section
    } = useSelector((state: Store) => (state.closeSectionPayload as ModuleEntities).actionPoints[id]);

    const selectedSection = getSelectedSection(sectionsAsOptions, section);

    const onChange = (value: ValueType<OptionType>) => {
        let selectedSectionId = prop('value', value);

        if (section === selectedSectionId) {
            selectedSectionId = null;
        }

        const payload = {
            section: selectedSectionId,
            id
        };
        onSelectActionPointSection(payload, dispatch);
    };

    return (
        <div className={clsx(styles.bottomMargin1, styles.itemBorderWrap)}>
            <Box className={styles.travel} justify="between">
                <Box column >
                    <Typography className={styles.refNum} variant="subtitle2">{reference_number}</Typography>
                    <Typography>{description}</Typography>
                </Box>

                <Box className={clsx(styles.dropdown, styles.indicatorDropdown, styles.travelDropdown)} >
                    <Dropdown
                        value={selectedSection}
                        onChange={onChange}
                        options={sectionsAsOptions}
                    />
                </Box>
            </Box>
        </div>
    );

};

export default ActionPointEditItem;
