import DashboadLayout from "@/components/DashboadLayout";
import SectionRenderer from "@/modules/settings/SectionRenderer";

import info from "../../assets/svgs/info.svg";
import globe from "../../assets/svgs/material-symbols_language.svg";
import security from "../../assets/svgs/mdi_security-account.svg";
import notification from "../../assets/svgs/notification.svg";
import theme from "../../assets/svgs/pajamas_appearance.svg";
import support from "../../assets/svgs/support.svg";

const Settings = () => {
  const list = {
    firstSection: [
      {
        title: "Notifications",
        actions: ["Permissions", "Alerts"],
        to: "#",
        class: "bg-peach",
        icon: notification,
      },
      {
        title: "Privacy",
        actions: ["Password", "two-factor authentication"],
        to: "#",
        class: "bg-lightBlue",
        icon: security,
      },
      {
        title: "Appearance",
        actions: ["Themes", "Display"],
        to: "#",
        class: "bg-peachyPink",
        icon: theme,
      },
      {
        title: "Language and Region",
        actions: ["Language", "Country", "Timezone"],
        to: "#",
        class: "bg-peach",
        icon: globe,
      },
    ],
    secondSection: [
      {
        title: "Help and Suport",
        actions: ["Help centre", "Contact us 24/7", "In-chat support"],
        to: "#",
        class: "bg-lightBlue",
        icon: support,
      },
      {
        title: "About",
        actions: ["About Wetindeysup"],
        to: "#",
        class: "bg-peachyPink",
        icon: info,
      },
    ],
  };

  return (
    <DashboadLayout>
      <div className="container mx-auto flex flex-col gap-10 px-10 md:px-0 lg:px-10 py-14">
        <SectionRenderer sectionItems={list.firstSection} />
        <SectionRenderer sectionItems={list.secondSection} />
      </div>
    </DashboadLayout>
  );
};

export default Settings;
