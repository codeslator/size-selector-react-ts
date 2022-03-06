import { FC } from 'react';

const sizes: string[] = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
];

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const SizeSelector: FC<Props> = ({ selectedSize, onSizeChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      {sizes.map((size, index) => (
        <button
          type="button"
          key={index}
          className={selectedSize === size ? 'active' : ''}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}  
    </div>
  )
}
