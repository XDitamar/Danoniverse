const uplodstats = async () => {
    const imageRef = ref(storage, `data/${.username + v4()}`);
    .then(() => {
        .then((url) => {
            addDoc(postRef, {
                prompt: prompt,
                mail: email,
                password: password,
                username: username,
            })
                .then(res => alert("posted"))
                .catch(err => console.log(err))
            }
        })
    })
    .catch(err => console.log(err))

  }
  