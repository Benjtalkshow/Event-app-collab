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

interface SidebarProps {
  onClickX?: () => void;
  onClickLink?: () => void;
}

<<<<<<< HEAD
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
=======
interface CardProps {
  img: string;
  name: string;
  date: string;
  time: string;
  location: string;
  bgColor: string;
}

interface ReminderCardTypes {
  time: string;
  title: string;
  location: string;
  background: string;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
>>>>>>> baccd966e9ee8e8794b1599d79a66773ff933ac9
