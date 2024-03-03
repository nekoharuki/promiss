function getData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        let data={message:"こんにちはもう朝ですね"}
        resolve(data);
    },2000);
});
}

const button=document.querySelector('#put');
button.addEventListener('click',function(){
    getData()
    .then(function(data){
        const result=document.querySelector('#result');
    result.innerHTML=data.message;
    })
    .catch(function(error){
        console.error(error);
    })
})