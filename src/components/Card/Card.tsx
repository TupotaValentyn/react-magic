import React, { FC } from 'react';

export type CardProps = {
  title: string;
  description: string;
  img?: string;
  imageSize?: number;
  alt?: string;
};

const IMAGE_PLACEHOLDER_URL = 'https://via.placeholder.com';

const getImageLink = (image: Pick<CardProps, 'img' | 'imageSize'>) => {
  return image.img || `${IMAGE_PLACEHOLDER_URL}/${image.imageSize || 320}`
}


const Card: FC<CardProps> = ({ children, ...props }) => {
  return <div>
    <h1>{props.title}</h1>
    <figure>
      <picture>
        <source srcSet={props.img} />
        <img src={getImageLink(props)} alt={props.alt || 'placeholder-image'} />
      </picture>
      <figcaption>
        {props.description}
      </figcaption>
    </figure>
  </div>
};

export default Card;
