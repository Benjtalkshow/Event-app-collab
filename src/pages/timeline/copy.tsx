import DashboadLayout from "@/components/DashboadLayout";
import TimelineBanner from "@/components/timeline-components/TimelineBanner";
import TimelineEvents from "@/components/timeline-components/TimelineEvents";

const Timeline = () => {
  return (
    <DashboadLayout>
      <div className='w-full h-[100vh] px-4 lg:px-10 '>
        <TimelineBanner />
        <TimelineEvents />
      </div>
    </DashboadLayout>
  );
};

export default Timeline;
