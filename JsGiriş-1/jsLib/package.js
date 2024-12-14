export function Clicked()
{
    console.log("Clicked");

    let status = true;

    if(helperClicked.style.display == "none")
    {
        status = false;
        
        helperClicked.style.display = "block";

    }

    if(status)
    {
        helperClicked.style.display = "none";
    }
}