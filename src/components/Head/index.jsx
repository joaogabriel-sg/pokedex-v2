import { useEffect } from 'react';

const Head = ({ title, description }) => {
  useEffect(() => {
    const titleComplement = title ? ` | ${title}` : '';
    document.title = `Pokémon${titleComplement}`;

    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', description || '');
  }, [title, description]);

  return null;
};

export default Head;
