import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export function Landing() {
    const navigate = useNavigate();
  return (
  <div className="flex justify-center h-full">
    <div className="pt-8 max-w-screen-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> 
        <div className=" flex justify-center">
            <img src={"/ChessBoard.jpeg"} className="max-w-96"></img>
        </div>
        <div className="pt-16">
            <div className="flex-justify-center">
            <h1 className="text-4xl font-bold text-white">
                PLAY CHESS ONLINE ON OUR SITE
            </h1>
            </div>
            <div className="mt-8 flex justify-center">
               <Button onClick={() => {
                  navigate("/game")
               }} >
                Play Online
               </Button>
           </div>
           {/* <div>
               <button>
                Play Computer
               </button>
           </div>     */}
        </div>
        
      </div>
    </div>
  </div>
  )
}

