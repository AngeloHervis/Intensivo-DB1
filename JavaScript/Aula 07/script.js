const simularRequisicao = (success = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) return reject("Erro na requisição");
      resolve("Requisição bem-sucedida");
    }, 1000);
  });
};
simularRequisicao()
  .then((value) => {
    console.log({ value });
  })
  .catch((err) => {
    console.log({ err });
  });
const obterUsuario = (userId) => {
  const users = [{ id: 1, name: "Angelo" }];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (!user) return reject("User not found with ID " + userId);
      resolve(user);
    }, 1000);
  });
};
const obterComentarios = (userId) => {
  const comentarios = {
    1: ["Muito legal", "First", "Não gostei"],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      const userComments = comentarios[userId] || [];
      resolve(userComments);
    }, 2000);
  });
};

const exibirDetalhes = (userId) => {
  let foundUser;
  obterUsuario(userId)
    .then((user) => {
      foundUser = user;
      return obterComentarios(user.id);
    })
    .then((comentarios) => {
      foundUser.comments = comentarios;
      console.log(foundUser);
    })
    .catch((error) => {
      console.error(error);
    });
};

exibirDetalhes(1);

const delayFunction = (maxDelayInSec) => {
  const delayInSec = Math.floor(Math.random() * (maxDelayInSec + 1));
  const delayInMs = delayInSec * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delayInMs, delayInMs);
  });
};

delayFunction(5).then((delay) => {
  console.log("Olaaa", delay);
});

const calcMedia = (arr) => {
  return new Promise((resolve, reject) => {
    delayFunction(2).then(() => {
      const soma = arr.reduce((acc, valor) => acc + valor, 0);
      resolve(soma / arr.length);
    });
  });
};

calcMedia([10, 5])
  .catch(() => {
    return 0;
  })
  .then((value) => {
    console.log(value);
  });

new Promise((resolve) => {
  console.log("1");
  resolve;
}).then(() => {
  console.log(2)
  throw new Error();
}).then(() => {
  console.log(3)
}).catch(() => {
  console.log("Erro 1")
}).then(() => {
  console.log(4)
})
