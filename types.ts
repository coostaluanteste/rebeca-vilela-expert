
export interface ImageData {
  url: string;
  category: 'antes-depois' | 'feedback' | 'botox' | 'criancas' | 'expert';
  description?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
