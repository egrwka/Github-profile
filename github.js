class Github{
    constructor(){
        this.client_id='33bc87a4f554d8b0f6d9';
        this.client_secret='984a8ee7e85621e5ecff85f0658faa54b862180c';
        this.repos_count=5;
        this.repos_sort='created: asc';
        this.user='egrwka';
    }

    //get a user info

    async getUserData(){
        let urlProfile=`https://api.github.com/${this.user}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos=`https://api.github.com/${this.user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);
    }

}