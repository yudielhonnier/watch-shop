export interface IBrands {
  _id: string;
  imgUrl: string;
  name: string;
}
export interface IPageTitle {
  title: string;
  subtitle: string;
}

export interface ICard {
  name: string;
  description: string;
  haveTitle: boolean;
  width2: string;
  height2: string;
}

export interface IPaddingRight {
  pr: boolean;
}

export interface IButtonContact {
  src: string;
  text: string;
}
export interface IPlans {
  category: string;
  range: string;
  description: string;
  isAdvanced: boolean;
  color: string;
  size: string;
}

export interface IIcon {
  xmlns: string;
  d: string;
}

export interface IclockType {
  name: string;
}

export interface ICarrousel {
  showTypes: boolean;
}

export interface ChartsHeaderProps {
  category: string;
  title: string;
}
