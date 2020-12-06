<template>
    <div class = "navbar">

        <b-dropdown aria-role="list" position="is-bottom-left" class ="side-menu">
            <button class="button" slot="trigger" id="hamburger" aria-controls="dropdown-menu" v-bind:class="{'active-button':buttonIsActive}"  v-on:click='toggle' >
                <b-icon icon="menu" size="is-medium"></b-icon>
            </button>
                    <b-dropdown-item class="menu-items" aria-role="listitem">
                        <router-link class="router-link-dropdown" to="/">Home</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item class="menu-items" aria-role="listitem">
                        <router-link class="router-link-dropdown" to="/about">About</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item class="menu-items" aria-role="listitem">
                        <router-link class="router-link-dropdown" to="/login">Login</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item class="menu-items" aria-role="listitem">
                        <router-link class="router-link-dropdown" to="/secret">Secret</router-link>
                    </b-dropdown-item>
        </b-dropdown>
    </div> 
</template>


<script>
export default {
        data() {
            return {
                buttonIsActive: false,
                menuIsActive: true,
                logo: require("@/assets/images/logo-eestec.png"),
                home: require("@/assets/images/home-icon-silhouette.svg"),
                isEnglish: false,
                isRomanian: false
            } 
        },
        methods: {
            toggle() {
                this.buttonIsActive = !this.buttonIsActive;
            }
        },
        created() {
    
        }
}
</script>

<style lang="scss">

.navbar {
    position: fixed !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red !important;
    height: 88px;
    padding: 18px 20px;
    padding-right: 0;
    width: 100%;
    z-index: 100 !important;

    & > div {
        width: 33%;
        padding-right: 20px;
    }

    & > div:last-child {
        display: flex;
        justify-content: flex-end;
    }
    
    span.icon {
        color: #fff;
    }

    .button {
        border: none;
        width: 40px;
        height: 40px;
        background-color: red;
    }

    .dropdown-content {
        background-color: red !important;
    }

    .dropdown-item { 
        padding: 0;
    }

    a {
        color: #fff;
        background-color: red;
        font-size: 14px;        
    }

    .menu-items{
        height: 50px;
        a {
            height: 30px;
            display: flex;
            align-items: center;
        }
    }
    .menu-items:hover {
        background-color: #fff;
        a{
            color: red;
            background-color: #fff;
        }
    }

    .router-link-dropdown {
        height: 100% !important;
        width: 100%;
        display: block;
        padding-left: 1rem;
    }
}

.eestec-logo {
    height: 100%;
    img {
        height: 100%;
    }
    position: relative;
}

.home-logo {
    height: 100%;
    text-align: left;
    background-color: red;
    display: flex;

    & > a {
        display: flex;
        align-content: center;
    }

    img {
        width: 32px;
        color: #fff;
        fill: #fff;
    }

    .languages {
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    a:hover {
        color: darken(#fff, 20%);
    }

    .active-language {
        text-decoration: underline;
    }

}

.side-menu {
    justify-content: end;
    
    & > div {
        align-items: center;
        display: flex;
    }
}


</style>


