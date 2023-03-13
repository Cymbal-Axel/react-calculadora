import Button from "./Boton";

export default function PanelDeBotones(clickHandle){
    
    const handleClick = nombreDeBoton => clickHandle(nombreDeBoton);

    return(
        <div>
            <div>
                <Button name="AC" clickHandle={handleClick}/>
                <Button name="+/-" clickHandle={handleClick}/>
                <Button name="%" clickHandle={handleClick}/>
                <Button name="/" clickHandle={handleClick}/>
            </div>
        </div>
    )

}