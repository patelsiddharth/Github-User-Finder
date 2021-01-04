class GitHub
{
    constructor() 
    {
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user, client_id = '', client_secret = '')
    {
        let profileURL = '';
        let reposURL = '';
        if(client_id !== '')
        {
            profileURL = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;
            reposURL = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${client_id}&client_secret=${client_secret}`;
        }
        else
        {
            profileURL = `https://api.github.com/users/${user}`;
            reposURL = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;
        }
        
        const profileResponse = await fetch(profileURL);
        const profileData = await profileResponse.json();

        const reposResponse = await fetch(reposURL);
        const reposData = await reposResponse.json();
        
        return {
            profileData,
            reposData
        };
    }
}
