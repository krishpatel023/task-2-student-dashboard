export default function TaskIndividual() {
  return (
    <div className="w-full h-20 flex justify-between items-center
                    sm:h-24 sm:flex-col ">
        <div className="flex flex-col justify-center">
            <h1 className="font-medium text-base">User Interface Assignment</h1>
            <div className="flex gap-4">
                <span>22 October 2023</span>
                <span>Marks : 10</span>
            </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <button className="w-24 h-8 rounded bg-accent-color text-accent-complementary">
                Submit
            </button>
            <button className="w-24 h-8 rounded border-2 border-accent-color text-accent-color">
                View
            </button>
        </div>
    </div>
  )
}
