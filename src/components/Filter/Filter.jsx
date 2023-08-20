import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFiltered } from '../../redux/selectors';
import { Label, Input } from './Filter.styled'; // імпорт стилів тегів Label, Input

export const Filter = () => {
  const filter = useSelector(selectFiltered); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора getFilter
  const dispatch = useDispatch(); //виклик хука useDispatch повертає посилання на dispatch функцію зі сховища Redux, для відправки action за потреби

  const formChange = e => {
    dispatch(setFilter(e.target.value)); // запис в стан сховища Redux значення value поля вводу "Find contacts by name" за допомогою dispatch функції
  }; // функція formChange, виклик функції призводить до запис в стан сховища Redux

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter} // значення поля вводу "Find contacts by name" взяте зі стану сховища Redux за допомогою функції селектора getFilter
        onChange={formChange}
      />
    </Label> // при настанні події onChange викликається функція formChange
  );
}; // поверненя розмітки поля filter (теги Label і Input)
