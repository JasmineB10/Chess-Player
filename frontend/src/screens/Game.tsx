import Button from "../components/Button";
import { ChessBoard } from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";

export function Game() {
    const socket = useSocket();
    return(
        <div className="flex justify-center">
            <div className="pt-8 max-w-screen-lg w-full">
                <div className="grid grid-cols-1 gap-4 w-full">
                    <div className="col-span-4 w-full">
                        <ChessBoard/>
                    </div>
                    <div className="col-span-2 w-full">
                      <Button onClick={() => {
                              navigate("/game")
                          }} >
                              Play Online
                      </Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}