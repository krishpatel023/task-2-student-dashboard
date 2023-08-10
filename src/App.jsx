import StudentDashboard from "./pages/StudentDashboard"

function App() {
  return (
    <>  
      <div className="w-screen h-screen flex justify-center items-center bg-secondary-color md:h-auto">
        <div className="w-[95%] h-[95%]">
          <StudentDashboard />
        </div>
            
      </div>

    </>
  )
}

export default App
