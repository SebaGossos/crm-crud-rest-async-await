const url = `http://localhost:4000/clientes`;

export const newClient = async (client) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const getClients = async () => {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (id) => {
  const deleteClientUrl = `${url}/${id}`;

  try {
    await fetch(deleteClientUrl, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getClient = async (id) => {
  const editClientUrl = `${url}/${id}`;

  try {
    const getClient = await fetch(editClientUrl);
    return await getClient.json();
  } catch (error) {
    console.log(error);
  }
};

// update client with id
export const editClient = async (client) => {
  const editClientUrl = `${url}/${client.id}`;

  console.log(client);

  try {
    await fetch(editClientUrl, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href = 'index.html'
  } catch (error) {
    console.log(error);
  }
};
