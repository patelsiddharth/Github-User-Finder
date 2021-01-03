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
        console.log(profileURL);
        console.log(reposURL);
        const profileResponse = await fetch(profileURL);
        const profileData = await profileResponse.json();

        const reposResponse = await fetch(reposURL);
        const reposData = await reposResponse.json();

        console.log(profileData);
        console.log(reposData);
        return {
            profileData,
            reposData
        };
    }
}
//https://api.github.com/users/patelsiddharth?client_id=1bc725fbe7d6053f7211&client_secret=f4d0758810be8e63b5cfe80864bccd853e534f6f
// Client Secret : 4d479c46e679af99e3cf0f426abab0e8941d2127
// Client ID : ed18fce395ae9aa32868