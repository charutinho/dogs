import React from "react";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

import { PASSWORD_LOST } from "../../api";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });

      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu sua senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        "Email enviado."
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
