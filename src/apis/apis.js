const POST_FORM_DATA_URL = 'https://naughty-goldwasser-b21f47.netlify.app/get-a-quote';

const Apis = {
  postData: async values => {
    console.log(values);
    try {
      await fetch(POST_FORM_DATA_URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values)
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export default Apis;
