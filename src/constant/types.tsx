import { LegacyRef } from 'react';
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
export interface IHeroProps {
  pr: boolean;
  heroRef: LegacyRef<HTMLDivElement>;
}
export interface INavbarProps {
  refsArray: React.RefObject<HTMLDivElement>[] | null;
}
export interface IFeaturesProps {
  pr: boolean;
  featuresRef: LegacyRef<HTMLDivElement>;
}
export interface IAnaliticsProps {
  pr: boolean;
  analiticsRef: LegacyRef<HTMLDivElement>;
}
export interface IPricingProps {
  pr: boolean;
  pricingRef: LegacyRef<HTMLDivElement>;
}
export interface IContactProps {
  pr: boolean;
  contactRef: LegacyRef<HTMLDivElement>;
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

export interface NavLinks {
  id: string;
  title: string;
}
