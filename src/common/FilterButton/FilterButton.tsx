import { FilterMenuButtonProps, RounderFilterButtonWrapper } from './FilterButton.styles';

interface FilterButtonProps extends FilterMenuButtonProps {
    label: string;
}

const FilterButton = ({
    label,
    isActive = false,
    onClick,
    ...props
}: FilterButtonProps) => {
    return (
        <RounderFilterButtonWrapper
            className='btn btn-filter btn-filter-rounder'
            isActive={isActive}
            {...props}
            onClick={onClick}
        >
            {label}
        </RounderFilterButtonWrapper>
    );
};

export default FilterButton;