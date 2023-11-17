let text = document.getElementById("text");
let send = document.getElementById("send");
let responseText = document.getElementById("recived");
let r;
 
function sendToChatGPT() {
    responseText.innerHTML = `<span class="loader"></span>`
    responseText.style.display = "flex"
  let token = "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";
  let url = "https://api.openai.com/v1/chat/completions";
  let headers = {
    "Authorization": `Bearer ${token}`,
  };

  let body ={
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": text.value}],
    "temperature": 0.7
  }
  axios.post(url, body , {headers:headers}).then((response) => {
     r = response.data.choices[0].message.content
     responseText.style.display = "block"
     responseText.innerHTML = r
    
  }).catch((e) => {
    console.log(e)
  })

 
}


