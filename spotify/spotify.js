function checklogin()
{
    event.preventDefault();
    const codeName=document.getElementById('UserName').value;
    const password=document.getElementById('password').value;
    const username='Absar';
    const pass='1234';
    if(codeName==username && password==pass)
    { window.location.href="spotify.html";}
    else
    {
        console.log('unsuccessfull');
    }
}