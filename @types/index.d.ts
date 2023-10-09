interface sectionItem {
  title: string;
  actions: string[];
  to: string;
  class: string;
  icon: string;
}

interface sectionItems {
  sectionItems: sectionItem[];
}

interface CardTypes {
  index: number;
  value: any;
}

interface AddBtnProps {
  label: string;
  onClick: () => void;
}

interface PeopleCardProps {
  image : any,
  groupName: string,
  events : string,
  icon : any,

}