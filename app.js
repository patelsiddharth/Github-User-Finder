//Init Class
const github = new GitHub();
const ui = new UI();

const searchUserForm = document.getElementById('form'),
      selectClientOptions = document.getElementById('selectClientOptions'),
      clientId = document.getElementById('clientId'),
      clientSecret = document.getElementById('clientSecret');


selectClientOptions.addEventListener('click', (e) =>
{
    clientId.disabled = clientId.disabled == true ? false : true;
    clientSecret.disabled = clientSecret.disabled == true ? false : true;
});

searchUserForm.addEventListener('submit', e =>
{
    const userText = document.getElementById('username').value;
    let client_id = clientId.value,
        client_secret = clientSecret.value;

    if(clientId.disabled)
    {
        client_id = '';
        client_secret = '';
    }
    if(userText !== '')
    {
        github.getUser(userText, client_id, client_secret)
        .then
        (        
            data => 
            {
                if(data.profileData.message === 'Not Found')
                {
                    ui.ShowAlert('User not found !!!','alert alert-danger');
                }     
                else
                {
                    ui.ClearAlert();
                    ui.ShowUser(data.profileData);
                    ui.ShowRepos(data.reposData);
                }
            }
        );
    }
    else
    {
        ui.ClearProfile();
    }
    e.preventDefault();
})
