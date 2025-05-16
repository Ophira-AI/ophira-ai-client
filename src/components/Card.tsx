import { FC } from 'react';
import { CardProps } from '../types/Card'

const Card: FC<CardProps> = ({ title, description }) => (
  <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default Card;
