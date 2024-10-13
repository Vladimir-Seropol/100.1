import { ChangeEvent, Dispatch, FC, useState } from 'react';
import style from './style.module.css';

type Props = {
    setFilterValue: Dispatch<React.SetStateAction<(sneakers: any[]) => any[]>>;
};

const Search: FC<Props> = ({ setFilterValue }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(event.target.value);
    };

    const handleClick = () => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        // Устанавливаем функцию фильтрации
        setFilterValue(() => (products: any[]) =>
            products.filter(product => product.price >= min && product.price <= max)
        );
    };

    return (
        <div className={style.container}>
            <input 
                value={minPrice} 
                type="number" 
                placeholder="Минимальная цена" 
                onChange={handleMinPriceChange} 
            />
            <input 
                value={maxPrice} 
                type="number" 
                placeholder="Максимальная цена" 
                onChange={handleMaxPriceChange} 
            />
            <button onClick={handleClick}>Найти</button>
        </div>
    );
};

export default Search;







// import { ChangeEvent, Dispatch, FC, useState } from 'react';
// import style from './style.module.css';

// type Props = {
//   setFilterValue: Dispatch<React.SetStateAction<number | null>>;
// };

// const Search: FC<Props> = ({ setFilterValue }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     // Позволяем вводить только цифры
//     const value = event.target.value;
//     if (/^\d+$/.test(value)) {
//       setInputValue(value);
//     }
//   };

//   const handleClick = () => {
//     // Устанавливаем значение фильтра как число или null, если пусто
//     setFilterValue(inputValue ? parseFloat(inputValue) : null);
//   };

//   return (
//     <div className={style.container}>
//       <input
//         value={inputValue}
//         type="text"
//         placeholder="Введите цену"
//         onChange={handleChange}
//       />
//       <button onClick={handleClick}>Найти</button>
//     </div>
//   );
// };

// export default Search;








// import { ChangeEvent, Dispatch, FC, useState } from 'react';

// import style from './style.module.css'

// type Props = {
// 	setFilterValue : Dispatch<React.SetStateAction<string>>
// }


// const Search: FC<Props> = ({setFilterValue}) => {

// 	const [inpuValue, setinputValue] = useState('');
// 	const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
		
// 		setinputValue(event.target.value);
// 	}

// 	const handleClick = () => {
// 		setFilterValue(inpuValue);
		
// 	}
// 	return(
// 		<div className={style.container}>
// 			<input value={inpuValue} type="text" onChange={(event) => handleChange(event)} />
// 			<button onClick={handleClick}>Найти</button>
// 			</div>
// 	);
// };
// 	export default Search;