export default {
    data() {
        return {
            pageHeaderStyle: {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                height: '46px',
                width: '100%',
                position: 'fixed',
                top: '0',
                right: '0',
                left: '0',
                zIndex: '100',
            },
            headerContentWrapperStyle: {
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0px 120px',
            },
            navbarStyle: {
                flex: '1',
                display: 'flex',
                justifyContent: 'flex-start',
                width: '33%',
            },
            navbarLinkStyle: {
                listStyleType: 'none',
                fontSize: '14px',
                padding: '0px 15px',
                color: '#606060',
                fontWeight: 'bold',
            },
            // Linked as if placed in index.html
            twitterLogoLink: './assets/img/twitter-logo.png',
        }
    },
    template: `
    <header :style="pageHeaderStyle">
        <div :style="headerContentWrapperStyle">
            <nav :style="navbarStyle">
            <li :style="navbarLinkStyle"><a href="#"></a>Home</li>
            <li :style="navbarLinkStyle"><a href="#"></a>Moments</li>
            <li :style="navbarLinkStyle"><a href="#"></a>Notifications</li>
            <li :style="navbarLinkStyle"><a href="#"></a>Messages</li>
            </nav>
            <div class="logo-stuff">
            <img :src="twitterLogoLink" alt="Twitter Logo" class="twitter-logo" />
            </div>
            <div class="tweet-icon">
            <button class="tweet-btn"><b>Tweet</b></button>
            </div>
        </div>
    </header>
    `,
};
