import { useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filter(inputValue));
  };

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChangeFilter} />
      </FilterLabel>
    </div>
  );
};
