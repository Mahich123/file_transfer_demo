import LeftItem from "./components/leftItem"
import RightItem from "./components/rightItem"
const Home = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
     <div className="flex flex-row gap-x-8">
        <LeftItem />
        
          <div className="divider lg:divider-horizontal">
            <button className="btn btn-square btn-outline w-10 h-9">
                  {">"}
            </button>
            
            <button className="btn btn-square btn-outline w-10 h-9">
                  {"<"}
            </button>
          </div> 
        
        <RightItem />        
      </div>
    </main>
  )
}

export default Home
