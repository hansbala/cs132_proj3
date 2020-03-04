import HeaderComponent from './Header.js';
import FeedComponent from './FeedComponent.js';
import CreateTweetComponent from './CreateTweet.js';
import SearchComponent from './Search.js';
// import Router from './Router.js';

const app = new Vue({
    el: '#app',
    // router: Router,
    components: {
        'header-component': HeaderComponent,
        'feed-component': FeedComponent,
        'create-tweet-component': CreateTweetComponent,
        'search-component': SearchComponent,
    },
    template: `
    <div class="test">
        <header-component />
        <create-tweet-component />
        <search-component />
        <feed-component />
    </div>
    `
});