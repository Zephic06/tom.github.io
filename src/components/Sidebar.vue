<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
        <p>tom</p>
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-symbols-outlined">menu</span>
        </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
        <router-link class="button" to="/">
            <span class="material-symbols-outlined">home</span>
            <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/computer">
            <span class="material-symbols-outlined">computer</span>
            <span class="text">Computer</span>
        </router-link>
        <router-link class="button" to="/binair-stelsel">
            <span class="material-symbols-outlined">counter_1</span>
            <span class="text">Binair</span>
        </router-link>
        <router-link class="button" to="/kleur-modellen">
            <span class="material-symbols-outlined">brush</span>
            <span class="text">RGB</span>
        </router-link>
        <router-link class="button" to="/beeld-en-geluid">
                <span class="material-symbols-outlined">headphones</span>
                <span class="text">Beeld</span>
        </router-link>
    </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-symbols-outlined">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .flex {
        flex: 1 1 0;
    }

    .logo {
        margin-bottom: 1rem;
        background-color: var(--dark);
        width: 2rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover{
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button .text{
        opacity: 0;
        transition: 0.3 ease-in-out;
    }

    h3 {
        color: var(--light);
        font-size: 0.875rem;
        text-transform: uppercase;
    }

    .menu{
        margin: 0 -1rem;

        .button{
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text{
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-symbols-outlined .text{
                    color: var(--light);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }


    &.is-expanded{
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
        }

        h3, .button .text{
        opacity: 1;
        transition: 0.3s ease-in-out;
        }

        .button{
            .material-symbols-outlined{
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>