export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
        <div className="flex flex-col items-center w-screen">
          <h1 className="text-title text-6xl">Raégen</h1>
          <h1 className="text-title text-6xl">Ellis</h1>
          <h2 className="text-text1">Aspiring Computational and Software Engineer</h2>
          <div className="flex flex-col items-center w-full">
            <p className="text-text2 text-center">
              first year cs student at USC. 
              building applications that empower
              marginalized communities.
            </p>
          </div>
          <p className="text-title">[github] [linkedin] [instagram] [devpost]</p>
          <p className="text-title">[download] resume</p>
        </div>
      </div>



      <div>
        <h1>Skills</h1>
        <h2>languages</h2>
        <p>C++ Python Javascript HTML/CSS</p>
        <h2>frameworks & tools</h2>
        <p>React.js Next.js Git</p>
      </div>

      <div>
        <h1>Projects</h1>
        <h2>cornrow</h2>
        <h2>The Room</h2>
        <h2>BudgetBuddy</h2>
        <h2>flamingo</h2>
        <h2></h2>
      </div>
      <div className="mt-100"></div>
    </>
  );
}
