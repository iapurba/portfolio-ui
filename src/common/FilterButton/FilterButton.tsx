import { FilterMenuButtonProps, RounderFilterButtonWrapper } from './FilterButton.styles';

interface FilterButtonProps extends FilterMenuButtonProps {
    label: string;
}

const FilterButton = ({
    label,
    active = false,
    onClick,
    ...props
}: FilterButtonProps) => {
    return (
        <RounderFilterButtonWrapper
            className='btn btn-filter btn-filter-rounder'
            active={active}
            {...props}
            onClick={onClick}
        >
            {label}
        </RounderFilterButtonWrapper>
    );
};

export default FilterButton;