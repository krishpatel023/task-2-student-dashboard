import Analytics from "../components/Analytics";
import Attendance from "../components/Attendance";
import StudentInfo from "../components/StudentInfo";
import Tasks from "../components/Tasks";

export default function StudentDashboard() {
  return (
    <div className="w-full h-full flex justify-between items-center bg-secondary-color 
                    md:flex-col-reverse md:h-auto md:justify-start md:gap-4">
        <div className="min-w-[74%] h-full flex flex-col justify-between
                        md:w-[95%] md:h-auto md:justify-normal md:gap-4">
            <div className="w-full h-[48%] flex justify-between items-center
                            md:flex-col md:justify-normal md:gap-4">
                <div className="w-[25%] h-[98%] flex justify-center items-center
                                md:w-full md:h-80">
                    <Attendance/>
                </div>
                <div className="w-[73%] h-[98%] flex justify-center items-center
                                md:w-full md:h-auto ">
                    <Tasks />
                </div>
            </div>
            <div className="w-full h-[49%] flex justify-center items-center
                            md:h-80">
                <Analytics />
            </div>
        </div>
        <div className="w-[24%] h-full flex justify-center items-center 
                        md:w-[95%] md:mt-8">
            <StudentInfo/>
        </div>
    </div>
  )
}
