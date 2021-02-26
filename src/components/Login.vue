<template>
    <div class="main">
        <div class="login">
            <div class="content-login">
                <header>
                    <h3>Vamos nos conectar!</h3>
                    <br>
                        <div class="content-login-new-user">
                            <p>Novo no Cota Agora?</p><a href="#/signup">Crie a sua conta aqui!</a>
                        </div>
                </header>
                <div class="form">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Não se preocupe, não vamos compartilhar o seu e-mail.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Não sou um robô.</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </div>                    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>
.main {
    display: flex;
    height: 100%;
}

.login {
    margin-top: 40px;
    width: 100%;
    display: flex;
    
}

.content-login {
    width: 400px;
    height: 450px;
    background-color: rgb(121, 142, 180);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto
}

.content-login header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 30px;
}

.content-login-new-user {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.content-login h3 {
    font-weight: bolds;
    color: rgb(70, 199, 149);
}

.form {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.mb-3 label {
    display: flex;
    justify-content: left;
}

.form-text {
    color: azure
}

</style>