import TweetComponent from './TweetComponent.js';

export default {
    data() {
        return {
            // Linked as if in index.html
            penguinProfilePhotoLink: './assets/img/penguin.png',
            fetch_url: 'http://ec2-54-172-96-100.compute-1.amazonaws.com/feed/random?q=noodle',
            masterIDs: null,
            displayedIDs: null,
            masterTweets: [],
            searchOn: false,
        }
    },
    components: {
        'tweet-component': TweetComponent,
    },
    created() {
        // Initialize masterIDs and displayed IDs as new sets
        this.masterIDs = new Set();
        this.displayedIDs = new Set();
        this.fetchTweets();
    },
    methods: {
        // Fetches new tweets and updates masterIDs, and masterTweets,
        // and also adds the tweets to the DOM and appropriately updates
        // displayedIDs with the IDs of all the tweets
        fetchTweets() {
            fetch(this.fetch_url)
                .then(res => res.json())
                .then(data => {
                    // Update all ids of the tweets fetched and put them
                    // into the masterTweetList
                    console.log(data.statuses);
                    // this.updateMasterTweetList(data.statuses);
                })
                .catch(err => {
                    // Encountered an error in fetching the tweets
                    console.log(err);
                })
        },
        sortTweetList(tweetList) {

        },
        updateDisplayTweets(tweetList) {

        },
        createNewTweet(tweetContent, tweetCreatedTime) {

        },
        updateMasterTweetList(data) {

        },

    },
    template: `
    <div class="content-wrapper">
        <div class="content-center" id="mainLink" role="main">
            <tweet-component
                :key="12345"
                tweetID="12345"
                profilePhotoLink="./assets/img/penguin.png"
                profileImageAltText="Penguin"
                realLifeName="Penguin"
                userHandle="penguin"
                timeStamp="Nov 19"
                tweetContent="I'm taking this class called CS132 and the TAs are so cool"
            />
            <tweet-component
                :key="2456"
                tweetID="2456"
                profilePhotoLink="./assets/img/penguin.png"
                profileImageAltText="Penguin"
                realLifeName="Penguin"
                userHandle="penguin"
                timeStamp="Nov 19"
                tweetContent="This is another test"
            />
        </div>
    </div>
    `
}

// I'm taking this class called CS132 and the TAs are so cool