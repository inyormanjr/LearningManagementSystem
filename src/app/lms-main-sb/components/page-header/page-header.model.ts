export interface PageHeaderModel {
  title: string;
  breadCrums: BreadCrums[];
}

export interface BreadCrums {
  title: string;
  navigation: string;
  class: string;
}
