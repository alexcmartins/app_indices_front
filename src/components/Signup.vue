<template>
    <div class="main">
        <div class="signup">
            <div class="content-signup">
                <header>
                    <h3>Vamos criar uma conta!</h3>
                    <br>
                        <div class="content-account-already">
                            <p>Já possui uma conta!</p> <a href="#/login">Entre na sua conta aqui!</a>
                        </div>
                </header>
                <div class="form">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Nome</label>
                            <input type="Name" class="form-control" id="exampleInputName">
                        </div>
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
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
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

.signup {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-signup {
    width: 400px;
    height: 550px;
    background-color: rgb(121, 142, 180);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content-signup header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 30px;
}

.content-account-already {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content-signup h3 {
    font-weight: bolds;
    color: rgb(70, 199, 149);
}

.form {
    width: 100%;
    display: flex;
    justify-content: center;
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