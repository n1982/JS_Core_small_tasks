const GetAllEvents = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    console.log(res);
    const body = await res.json();
    console.log('body', body);

    return body;
  } catch (err) {
    return err;
  }
};

GetAllEvents();
