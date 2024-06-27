// types/react-d3-cloud.d.ts
declare module 'react-d3-cloud' {
    import * as React from 'react';
  
    interface Word {
      text: string;
      value: number;
    }
  
    interface Props {
      data: Word[];
      font?: string;
      fontSizeMapper?: (word: Word) => number;
      rotate?: (word: Word) => number;
      width?: number;
      height?: number;
      padding?: number | ((word: Word) => number);
      random?: () => number;
      onWordClick?: (event: React.MouseEvent<SVGTextElement>, word: Word) => void;
      onWordMouseOver?: (event: React.MouseEvent<SVGTextElement>, word: Word) => void;
      onWordMouseOut?: (event: React.MouseEvent<SVGTextElement>, word: Word) => void;
    }
  
    const WordCloud: React.FC<Props>;
    export default WordCloud;
  }
  