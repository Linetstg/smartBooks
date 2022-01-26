/// <reference types="react-scripts" />

type Books = {
  id: string,
  volumeInfo: BookVolumeInfo,
};

type BookVolumeInfo = {
  title: string,
  authors: string[],
  description: string,
  categories: string[],
  imageLinks: BookImageLinks,
  previewLink?: string,
};

type BookImageLinks = {
  smallThumbnail?: string,
  thumbnail?: string,
  small?: string,
  medium?: string,
  large?: string,
  extraLarge?: string,
};