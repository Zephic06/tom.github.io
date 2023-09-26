<template>
    <main class="home-page">
        <div class="intro">
            <span class="home-text">Thuis</span>
            <p>Dit is de thuis pagina</p>
            <button @click="ScrolltoHobbies">Over mij</button>
        </div>

        <div class="hobbies">
            <div class="text-hobbies"><h1>hobbies</h1></div>
            <div class="container-1">
                <h1>Hobbie 1</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi dolores quaerat alias quisquam? Iure assumenda consequuntur aliquam obcaecati tempore qui suscipit dolore a. Perspiciatis?</p>
            </div>
            <div class="container-2">
                <h1>Hobbie 2</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi dolores quaerat alias quisquam? Iure assumenda consequuntur aliquam obcaecati tempore qui suscipit dolore a. Perspiciatis?</p>
            </div>
            <div class="container-3">
                <h1>Hobbie 3</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi dolores quaerat alias quisquam? Iure assumenda consequuntur aliquam obcaecati tempore qui suscipit dolore a. Perspiciatis?</p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        ScrolltoHobbies() {
            window.scrollTo({
                top: 475,
                behavior: 'smooth'
            });
        },
    },
}


</script>

<style lang="scss" scoped>

.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    .home-text{
        font-size: 450%;
        font-weight: 100;
    }

    p{
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 5rem;
    }

    button{
        height: 4%;
        width: 6%;
        font-size: 125%;
        background-color: var(--dark-alt);
        border-radius: 0.25rem;
        color: var(--light);
        
    

    &:hover{
        scale: 0.95;
        opacity: 85%;
    }
}
}

.hobbies {
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  align-items: center; 
  width: 95;
  height: 60vh;
  background-color: var(--dark-alt);

  .text-hobbies{
    position: absolute;
    margin-top: 15px;
    color: var(--light);
    align-self: flex-start;
    justify-self: center;
  }

  .container-1,
  .container-2,
  .container-3 {
    width: 25rem;
    height: 30rem;
    margin: 0 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: var(--light);
  }



  .container-1,
  .container-2,
  .container-3{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    border-radius: 2%;

  }

  .container-1 p,
  .container-2 p,
  .container-3 p {
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 8px;
  margin-right: 8px;
  color: var(--dark-alt);
}

    .container-1 h1,
    .container-2 h1,
    .container-3 h1{
        color: var(--dark-alt);
    }
}

</style>

