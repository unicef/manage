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
import { propEq } from 'ramda';
import { ValueType } from 'react-select/src/types';
import { onSelectTravelSection } from 'pages/close-summary/actions';


const TravelEditItem: React.FC<EditItemProps> = ({ id }) => {
    const styles = useEditItemStyles();
    const dispatch = useDispatch();

    const sectionsAsOptions = useSelector(selectSectionsAsOptions);

    const {
        reference_number,
        traveler,
        purpose,
        section
    } = useSelector((state: Store) => (state.closeSectionPayload as ModuleEntities).travels[id]);

    const selectedSection = sectionsAsOptions.find(propEq('value', section));

    const onChange = (value: ValueType<OptionType>) => {
        const section = Number((value as OptionType).value);
        const payload = {
            section,
            id
        };
        onSelectTravelSection(payload, dispatch);
    };

    return (
        <div className={clsx(styles.editWrapper, styles.itemBorderWrap)}>
            <Box className={styles.travel} justify="between">
                <Box column >
                    <Box>
                        <Typography variant="body2"><b>{traveler}</b></Typography>
                        <Typography className={styles.refNum} variant="subtitle2">{reference_number}</Typography>
                    </Box>

                    <Typography>{purpose}</Typography>
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

export default TravelEditItem;