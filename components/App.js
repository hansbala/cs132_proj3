import HeaderComponent from './Header.js';

const app = new Vue({
    el: '#app',
    components: {
        'header-component': HeaderComponent
    },
    template: `
    <div class="test">
        <header-component />
    </div>
    `
});