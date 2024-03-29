const screen = document.getElementById("screen");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () =>
    {
        const pressButton = button.textContent;

        if(button.id === "C")
        {
            screen.textContent = 0;
            return;
        }

        if(button.id === "delete")
        {
            if(screen.textContent.length === 1 || screen.textContent === "Error!")
            {
                screen.textContent = "0";
            }else{
                screen.textContent = screen.textContent.slice(0, -1);

            }
            return;
        }

        if(button.id === "equal")
        {
            try
            {
                screen.textContent = eval(screen.textContent);

            }catch{
                screen.textContent = "Error!"
            }

           
            return;
        }

        if(screen.textContent == 0 || screen.textContent === "Error!")
        {
            screen.textContent = pressButton;
   
        }
        else{
            screen.textContent += pressButton;

        }
    }
    )
});
