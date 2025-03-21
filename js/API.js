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
    console.log( error )
  }
};

export const deleteClient = async id => {

  const deleteClientUrl = `${url}/${id}`
  
  try {
    await fetch( deleteClientUrl, {
      method: 'DELETE',
      
    } )
  } catch (error) {
    
  }
}