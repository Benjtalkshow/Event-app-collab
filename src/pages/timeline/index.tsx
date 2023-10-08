import DashboadLayout from "@/components/DashboadLayout";
import Discovery from "@/components/timeline-components/Discovery";
import Events from "@/components/timeline-components/Events";

const Timeline = () => {
  return (
    <DashboadLayout>
      <div className="w-full h-[100vh]  flex-shrink-0 m-auto">
        <Discovery />
        <Events />
      </div>
    </DashboadLayout>
  );
};

export default Timeline;
